module.exports = {
    TEST_MESSAGE: "test message",

    SETUP: {
        LANGUAGE: {
            ERROR: "This language is already set on this server, choose another.",
            UNAVAILABLE: "Sorry, the language you selected is not available.",
        },
    },

    STAFF: {
        SUCCESSFUL: "The request was successfully executed.",
        BLOCK_ERROR: {
            USER: "You can't block a user because they are on the bot's staff.",
            GUILD: "This server cannot be blocked because it is on whitelist.",
         },
        USER_EXIST: "This user already appears in the table by which the blocking function has been stopped.",
    },

    BLACKLIST: {
        USER: "You appear in the table of people who have a blacklist, therefore the execution of interactions has been blocked. To find out more, report to the support server.",
        GUILD: "This server has a blacklist, so you cannot use interaction. If you are the owner of this server, please report to the support server for more information about the blacklist.",
    },
}