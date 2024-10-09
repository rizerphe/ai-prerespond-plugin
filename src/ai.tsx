export const generate = async (
    chat: {
        author: string;
        content: string;
        replyAuthor: string;
        replyContent: string;
        attachmentFilenames: string[];
        timestamp: number;
    }[],
    apiKey: string,
    model: string,
): Promise<string> => {
    const messages = chat
        .slice(Math.max(chat.length - 15, 0))
        .map((message) => ({
            role: message.replyContent
                ? `${message.author
                }\nin reply to\n${message.replyContent.replace("\n", " ")}`
                : message.author,
            content: message.attachmentFilenames.length
                ? `${message.content}\n${message.attachmentFilenames
                    .map((filename) => `[Attachment: ${filename}]`)
                    .join("\n")}`.trim()
                : message.content,
            timestamp: message.timestamp,
        }));

    // The timestamps are in milliseconds. Every time there's a >= 1 hr pause between messages,
    // we'll add a special message there with the role of <time_passed> and the content of
    // for example "4 hour(s)"

    for (let i = 1; i < messages.length; i++) {
        const time_diff = messages[i].timestamp - messages[i - 1].timestamp;
        if (time_diff >= 3600000) {
            messages.splice(i, 0, {
                role: "<time_passed>",
                content: `${Math.floor(time_diff / 3600000)} hour(s)`,
                timestamp: messages[i].timestamp,
            });
        }
    }

    // We compare the last message's timestamp to the current time, and add the same special message
    // if the difference is >= 1 hr
    const time_diff = Date.now() - messages[messages.length - 1].timestamp;
    if (time_diff >= 3600000) {
        messages.push({
            role: "<time_passed>",
            content: `${Math.floor(time_diff / 3600000)} hour(s)`,
            timestamp: Date.now(),
        });
    }

    // Now, we remove the timestamp field
    messages.forEach((message) => {
        delete message.timestamp;
    });

    const response = await fetch(
        "https://api.fireworks.ai/inference/v1/chat/completions",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: model,
                max_tokens: 4000,
                top_p: 1,
                top_k: 40,
                presence_penalty: 0,
                frequency_penalty: 0.1,
                temperature: 0.6,
                messages: messages,
            }),
        }
    ).then((r) => r.json());
    const message = response.choices[0].message.content;

    // Make sure the message is not an attachment (the last line matches the pattern of an attachment)
    if (message.split("\n").pop()?.startsWith("[Attachment:")) {
        return "";
    }

    return message;
};
