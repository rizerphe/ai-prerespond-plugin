# AI Prerespond Plugin for Bunny

This repo contains an AI plugin for [Bunny](https://github.com/pyoncord/Bunny) - a fork of Vendetta - that helps you respond without thinking. For any of those who are worried about talking to an AI when messaging me - I've already gotten bored of this plugin, not using it, you are talking to a human :3

## How to install?

To install this plugin, paste the following URL into the Plugins page of Bunny:

https://rizerphe.github.io/ai-prerespond-plugin

## Usage

After installation, you'll need to configure the plugin with the model you want to use. You can do this by clicking the "Settings" button in the plugin and inputting your [fireworks.ai](https://fireworks.ai) API key and model ID.

## Model guide:

The plugin is meant to use your own finetunes on [fireworks.ai](https://fireworks.ai). I'm definitely not giving anyone access to my models, and there are no public models that are this conversational either way, at least as far as I know (besides, my conversational style is unique enough to where the model's usability for someone else would be extremely limited). If someone wants to finetune a general purpose model on discord-style conversations (discord-style, not discord - I know client mods already break discord's TOS, but training a model on a public server's conversations isn't just not allowed but also just bad) and publish it, that would be amazing. An example of a chat it supports is:

```json
[
    {
        "role": "rizerphe",
        "content": "Hello, how are you?"
    },
    {
        "role": "<time_passed>",
        "content": "4 hour(s)"
    },
    {
        "role": "someone_else\nin reply to\nHello, how are you?", // the newlines in the reply content itself should be replaced with spaces
        "content": "Hi, sorry for taking so long to reply!\n[Attachment: image.png]" // The attachments are of course optional, separated by newlines; just filenames are specified - training something multimodal would be fun, but I didn't have the patience to do that
    }
]
```

You can probably just configure a chat template to make this work with existing assistants, but that was never the point of this plugin. Personally, as of right now, I'm using a finetune of llama3.2 3B.