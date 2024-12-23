const { readdirSync } = require("fs"),
    { REST, Routes } = require("discord.js");
require("dotenv").config();

module.exports = (client) => {
    // Check files
    const commands = [];
    const commandFiles = readdirSync("./commands").filter(file => file.endsWith(".js"));
     
    // Load commands
    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        commands.push(command.data.toJSON());
        client.commands.set(command.data.name, command);
    }

    // Rest load
    const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
    rest.put(Routes.applicationCommands(process.env?.CLIENT_ID), { body: commands }).then(() => {
        console.log(`Commands loaded (${client.commands.size})`);
    }).catch((error) => {
        console.error(error);
    });
}