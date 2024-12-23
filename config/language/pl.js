module.exports = {
    TEST_MESSAGE: "testowa wiadomosc",

    SETUP: {
        LANGUAGE: {
            ERROR: "Ten język jest już ustawiony na tym serwerze, wybierz inny.",
            UNAVAILABLE: "Wybrany język nie jest dostępny.",
        },
    },

    STAFF: {
        SUCCESSFUL: "Żądanie zostało pomyślnie wykonane.",
        BLOCK_ERROR: {
           USER: "Nie możesz zablokować użytkownika, ponieważ jest on w supporcie bota.",
           GUILD: "Ten serwer nie może być zablokowany, ponieważ jest w tabeli whitelisty.",
        },
        USER_EXIST: "Ten użytkownik jest już w tabeli, dlatego funkcja blokowania została zatrzymana.",
    },

    BLACKLIST: {
        USER: "Widniejesz w tabeli osób, które posiadają blackliste dlatego wykonanie interakcji zostało zablokowane. Aby dowiedzieć się więcej, zgłoś się na serwer supportu.",
        GUILD: "Ten serwer posiada blackliste, dlatego nie możesz użyć interakcji. Jeżeli jesteś właścicielem tego serwera, zgłoś się na serwer supportu w celu otrzymania większych informacji na temat blokady.",
    },
}