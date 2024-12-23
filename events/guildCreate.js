module.exports = {
    name: "guildCreate",
    async execute(guild, client) {
        // Set the default database records
        client.tables.GUILDS.ID.set(`${guild.id}`, true);
        client.tables.GUILDS.LANGUAGES.set(`${guild.id}`, "en");

        // Log
        console.log(`${guild.id} (${guild.name}) added to server and tables (guildsId, guildsLanguages)`);
    }
}