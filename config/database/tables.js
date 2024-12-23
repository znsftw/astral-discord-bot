const { Client } = require('discord.js'),
    client = new Client({ intents: 32767 });
    const { QuickDB } = require('quick.db');
    client.db = new QuickDB();

module.exports = {
    USERS: {
        BLACKLIST: client.db.table('usersBlacklist'),
    },
    GUILDS: {
        ID: client.db.table('guildsId'),
        LANGUAGES: client.db.table('guildsLanguages'),
        BLACKLIST: client.db.table('guildsBlacklist'),
        WHITELIST: client.db.table('guildsWhitelist'),
    },
    ACCESS: {
        STAFF: client.db.table('staffId'),
    },
}