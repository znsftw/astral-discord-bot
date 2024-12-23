const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('staff')
    .setDescription('interaction for owners')
    // Add subcommand to blacklist user
    .addSubcommand(subcommand =>
        subcommand
            .setName('block')
            .setDescription('command to add blacklist guild or user')
            .addStringOption(option =>
                option
                    .setName("userid")
                    .setDescription("enter the id")
                    .setMaxLength(19)
                    .setMinLength(18)
                )
                .addStringOption(option =>
                    option
                        .setName("guildid")
                        .setDescription("enter the id")
                        .setMaxLength(20)
                        .setMinLength(17)
                    )
        )
    .addSubcommand(subcommand =>
        subcommand
            .setName('unblock')
            .setDescription('command to delete blacklist guild or user')
            .addStringOption(option =>
                option
                    .setName("blockeduserid")
                    .setDescription("enter the id")
                    .setMaxLength(19)
                    .setMinLength(18)
                )
                .addStringOption(option =>
                    option
                        .setName("blockedguildid")
                        .setDescription("enter the id")
                        .setMaxLength(20)
                        .setMinLength(17)
                    )
        ),

    async execute(interaction, client) {
        const getStaffRights = await client.tables.ACCESS.STAFF.get(`${interaction.user.id}`);
        if(getStaffRights === true) {
            // User block
            if(interaction.options.getString("userid")) {
                const selectedUserId = interaction.options.getString("userid");
                const getSelectedUser = client.tables.USERS.BLACKLIST.get(selectedUserId)
                const getSelectedUserRights = await client.tables.ACCESS.STAFF.get(selectedUserId)
                if(getSelectedUserRights === true) {
                    interaction.reply({content: client.language.STAFF.BLOCK_ERROR.USER, ephemeral: true})
                    return;
                }
                if(getSelectedUser) {
                    await client.tables.USERS.BLACKLIST.set(selectedUserId, true)
                    await interaction.reply({content: client.language.STAFF.SUCCESSFUL, ephemeral: true})
                }
            }

            // User unblock
            if(interaction.options.getString("blockeduserid")) {
                const selectedUserId = interaction.options.getString("blockeduserid");
                const getSelectedUser = client.tables.USERS.BLACKLIST.get(selectedUserId)
                if (getSelectedUser) {
                    await client.tables.USERS.BLACKLIST.delete(selectedUserId)
                    await interaction.reply({content: client.language.STAFF.SUCCESSFUL, ephemeral: true})
                    }
            }

            // Guild block
            if(interaction.options.getString("guildid")) {
                if(interaction.replied) {
                    return;
                }
                const selectedGuildId = interaction.options.getString("guildid");
                const getSelectedGuild = client.tables.GUILDS.BLACKLIST.get(selectedGuildId);
                const getWhitelistGuild = await client.tables.GUILDS.WHITELIST.get(selectedGuildId);
                if(getWhitelistGuild === true) {
                    interaction.reply({content: client.language.STAFF.BLOCK_ERROR.GUILD, ephemeral: true})
                    return;
                }
                if(getSelectedGuild) {
                    await client.tables.GUILDS.BLACKLIST.set(selectedGuildId, true)
                    await interaction.reply({content: client.language.STAFF.SUCCESSFUL, ephemeral: true})
                }
            }
            
            // Guild unblock
            if(interaction.options.getString("blockedguildid")) {
                const selectedGuildId = interaction.options.getString("blockedguildid");
                const getSelectedGuild = client.tables.GUILDS.BLACKLIST.get(selectedGuildId)
                if (getSelectedGuild) {
                    await client.tables.GUILDS.BLACKLIST.delete(selectedGuildId)
                    await interaction.reply({content: client.language.STAFF.SUCCESSFUL, ephemeral: true})
                    }
            }
        }
    },
};