module.exports = {
    name: "guildDelete",
    async execute(guild, client) {
        // Delete the database config records
        client.tables.GUILDS.ID.delete(`${guild.id}`);
        client.tables.GUILDS.LANGUAGES.delete(`${guild.id}`);

        // Log
        console.log(`${guild.id} (${guild.name}) removed from the server and destroy the all tables from this server config`);
    }
}