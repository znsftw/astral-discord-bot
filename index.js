const { Client, Collection } = require("discord.js"),
    client = new Client({ intents: 32767 });
    require("dotenv").config();

client.commands = new Collection();
client.events = new Collection();

["commands", "events"].forEach((handler) => {
    require(`./handlers/${handler}`)(client);
});

client.login(process.env.TOKEN);