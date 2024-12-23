module.exports = {
    name: "ready",
    async execute(client) {
        console.log('Database loaded');
        console.log(`Connected as ${client.user.tag}`);
        client.user.setPresence({ status: "online", activities: [{ name: `build in process`, type: 3 }] });
    }
}