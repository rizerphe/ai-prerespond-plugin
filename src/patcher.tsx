import { useState, useEffect } from "react";
import { findByProps, findByStoreName } from "@vendetta/metro";
import { showToast } from "@vendetta/ui/toasts";
import { i18n, ReactNative as RN } from "@vendetta/metro/common";
import { after, before } from "@vendetta/patcher";
import { General } from "@vendetta/ui/components";
import { vstorage } from ".";
import { useProxy } from "@vendetta/storage";
import { useInterval } from "usehooks-ts";
import { generate } from "./ai";

const { Text } = General;

const MessageActions = findByProps("sendMessage", "receiveMessage");
const SelectedChannelStore = findByStoreName("SelectedChannelStore");
// const ChannelStore = findByStoreName("ChannelStore");
const MessageStore = findByStoreName("MessageStore");

export const patches = [];
const { ChatInput } = findByProps("ChatInput");

const fetchChat = (
    channelId: string
): {
    author: string;
    content: string;
    replyAuthor: string;
    replyContent: string;
    attachmentFilenames: string[];
    timestamp: number;
}[] => {
    const message_map = MessageStore.getMessages(channelId);
    const messageIDs = Object.keys(message_map._map);
    const messages = messageIDs
        .map((x) => message_map._map[x])
        .sort((message1, message2) => message1.timestamp - message2.timestamp);

    return messages.map((message) => ({
        author: message.author.username,
        content: message.content,
        replyAuthor:
            message.messageReference &&
            messages.find(
                (past) => past.id == message.messageReference.message_id
            )?.author.username,
        replyContent:
            message.messageReference &&
            messages.find(
                (past) => past.id == message.messageReference.message_id
            )?.content,
        attachmentFilenames: message.attachments.map(
            (attachment: any) => attachment.filename
        ),
        timestamp: Date.parse(message.timestamp),
    }));
};

const hashCode = (s: string) =>
    s.split("").reduce((a, b) => {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
    }, 0);

const AiGenerator = () => {
    const [message, setMessage] = useState("");
    const [hash, setHash] = useState(0);
    const [chat, setChat] = useState([]);
    useProxy(vstorage);
    const channel = SelectedChannelStore.getChannelId();

    useInterval(() => {
        const chat = fetchChat(channel);
        const rehash = hashCode(JSON.stringify(chat));

        if (hash !== rehash) {
            setHash(rehash);
            setChat(chat);
        }
    }, 1000);

    useEffect(() => {
        setMessage("");
        if (!vstorage.enabled) {
            return;
        }
        if (!chat.length) {
            return;
        }
        generate(chat, vstorage.apiKey, vstorage.model).then(setMessage);
    }, [chat]);

    return (
        vstorage.enabled &&
        message && (
            <RN.TouchableOpacity
                onPress={() => {
                    if (!message) {
                        return;
                    }
                    setMessage("");
                    MessageActions.sendMessage(channel, {
                        content: message,
                    });
                }}
            >
                <Text style={{ color: "white", padding: 10 }}>{message}</Text>
            </RN.TouchableOpacity>
        )
    );
};

export default () => {
    patches.push(
        after("render", ChatInput.prototype, function (_, rendered) {
            return (
                <RN.View style={{ backgroundColor: "transparent" }}>
                    <AiGenerator />
                    {rendered}
                </RN.View>
            );
        })
    );

    // thank you rosie
    patches.push(
        //@ts-expect-error not in RN typings
        before("render", RN.Pressable.type, ([a]) => {
            if (a?.accessibilityLabel === i18n.Messages.SEND)
                a.onLongPress = () => {
                    vstorage.enabled = !vstorage.enabled;
                    if (vstorage.enabled) {
                        showToast("Enabled AI prerespond");
                    } else {
                        showToast("Disabled AI prerespond");
                    }
                };
        })
    );

    return () => patches.forEach((x) => x());
};
