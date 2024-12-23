const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('setup')
    .setDescription('setup your server settings')
    .addSubcommand(subcommand =>
        subcommand
            .setName('language')
            .setDescription('setup the language you want the bot to run in on the server')
            .addStringOption(option =>
                option
                    .setName("lang")
                    .setDescription("enter your language here")
                    .setRequired(true)
                    .setMaxLength(2)
                    .setMinLength(2)
                ),
        ),
    async execute(interaction, client) {
        if(interaction.member.permissions.has([PermissionsBitField.Flags.Administrator])) {
            //// Language subcommand
            const selectedLanguage = interaction.options.getString("lang");
            const currentLanguage = await client.tables.GUILDS.LANGUAGES.get(`${interaction.guild.id}`);
            if(selectedLanguage === "en") {
                if(currentLanguage === "en") {
                    interaction.reply({content: client.language.SETUP.LANGUAGE.ERROR, ephemeral: true})
                }
                else {
                    client.tables.GUILDS.LANGUAGES.set(`${interaction.guild.id}`, "en");
                    await interaction.reply({content: "set succesfully", ephemeral: true});
                }
            }
            else if(selectedLanguage === "pl") {
                if(currentLanguage === "pl") {
                    interaction.reply({content: client.language.SETUP.LANGUAGE.ERROR, ephemeral: true})
                }
                else {
                    client.tables.GUILDS.LANGUAGES.set(`${interaction.guild.id}`, "pl");
                    await interaction.reply({content: "ustawiono pomyslnie", ephemeral: true})
                }
            }
            else {
                interaction.reply({content: client.language.SETUP.LANGUAGE.UNAVAILABLE, ephemeral: true})
            }
        }
    },
};