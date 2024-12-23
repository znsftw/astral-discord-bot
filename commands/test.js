const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("test"),
    async execute(interaction, client) {
        interaction.reply(client.language.TEST_MESSAGE);
    }
}