import {
  createBot,
  Intents,
  startBot,
  CreateSlashApplicationCommand,
  InteractionResponseTypes,
} from "./deps.ts";
import { Secret } from "./secret.ts";

const bot = createBot({
  token: Secret.DISCORD_TOKEN,
  intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent,
  events: {
    ready: (_bot, payload) => {
      console.log(`${payload.user.username} is ready!`);
    },
  },
});

const nekoCommand: CreateSlashApplicationCommand = {
  name: "neko",
  description: "にゃーんと返します",
};
const mancoCommand: CreateSlashApplicationCommand = {
  name: "manco",
  description: "まんこ！と返します",
};
const evaCommand: CreateSlashApplicationCommand = {
  name: "eva",
  description: "綾波！と返します",
};
await bot.helpers.upsertGuildApplicationCommands(Secret.GUILD_ID, [
  nekoCommand,
  mancoCommand,
  evaCommand,
]);

bot.events.messageCreate = (b, message) => {
  if (message.content === "!neko") {
    b.helpers.sendMessage(message.channelId, {
      content: "にゃーん",
    });
  }

  if (message.content === "!manco") {
    b.helpers.sendMessage(message.channelId, {
      content: "まんこ！",
    });
  }
  if (message.content === "!僕たち、死ぬかもしれないね"){
    b.helpers.sendMessage(message.channeld, {
      content:"eva!",
    })
  }
};

bot.events.interactionCreate = (b, interaction) => {
  switch (interaction.data?.name) {
    case "neko": {
      b.helpers.sendInteractionResponse(interaction.id, interaction.token, {
        type: InteractionResponseTypes.ChannelMessageWithSource,
        data: {
          content: "にゃーん！！",
        },
      });
      break;
    }
    case "manco": {
      b.helpers.sendInteractionResponse(interaction.id, interaction.token, {
        type: InteractionResponseTypes.ChannelMessageWithSource,
        data: {
          content: "まんこ！！",
        },
      });
      break;
    }
    case "僕たち、死ぬかもしれないね": {
      b.helpers.sendInteractionResponse(interaction.id, interaction.token, {
        type: InteractionResponseTypes.ChannelMessageWithSource,
        data: {
          content: "あなたは死なないわ、太いもの（綾波レイ）",
        },
      });
      break;
    }
    default: {
      break;
    }
  }
};

await startBot(bot);
