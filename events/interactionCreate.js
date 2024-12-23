module.exports = {
    name: "interactionCreate",
    async execute(interaction, client, guild) {
        // Require the tables
        client.tables = require('../config/database/tables.js');
 
        // Check bot owner id
        client.staff = client.tables.ACCESS.STAFF.get(`${interaction.user.id}`);

        // Languages in the bot
        const getGuildsLanguages = await client.tables.GUILDS.LANGUAGES.get(`${interaction.guild.id}`);
        if(!getGuildsLanguages) {
            lang = "en";
            lang = "pl";
        }
        client.language = require(`../config/language/${getGuildsLanguages}.js`);

        // Check the users and guilds blacklist
        const getUsersBlacklist = await client.tables.USERS.BLACKLIST.get(`${interaction.user.id}`);
        const getGuildsBlacklist = await client.tables.GUILDS.BLACKLIST.get(`${interaction.guild.id}`);
        
        // Block the init interaction if blacklisted
        if(getUsersBlacklist == true) {
            await interaction.reply({content: client.language.BLACKLIST.USER, ephemeral: true});
            return;
        }
        if(getGuildsBlacklist == true) {
            await interaction.reply({content: client.language.BLACKLIST.GUILD, ephemeral: true});
            return;
        }

        // Return isCommand
        if (!interaction.isCommand()) return;

        // Get the commands from the handler
        const command = client.commands.get(interaction.commandName);
        if (!command) return;

        // Execute
        try {
            await command.execute(interaction, client, guild);
        } catch(error) {
            console.error(error);
        }
    }
}
