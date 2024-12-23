const { readdirSync } = require("fs");

module.exports = (client) => {
    // Require the tables
    client.tables = require('../config/database/tables.js');
    
    // Check files
    const eventFiles = readdirSync("./events").filter(file => file.endsWith(".js"));

    // Load events
    for (const file of eventFiles) {
        const event = require(`../events/${file}`);
        client.on(event.name, (...args) => event.execute(...args, client));
        client.events.set(event.name, event);
    }

    // Log
    console.log(`Events loaded (${client.events.size})`);
}