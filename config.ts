var Conf = {
    DB: {
        CONF: {
            TYPE: "mysql", //   mysql || postgres || sqlite3 || mongodb
            HOST: "127.0.0.1",
            PORT: 3306,
            DATABASE: "lavoca",
            USERNAME: "root",
            PASSWORD: "",
            MONGO: {
                _URI: "mongodb://localhost:27017/?readPreference=primary&ssl=false", //url mongodb
                _DB: "qwerty" // db mongodb
            },
            Sqlite3: {
                FilePath: "./database.sqlite" //path sqlite
            }
        }
    },
    PORT: 8000,
    BASE_URL: "",
    HOST: "localhost",
    SHOW_ROUTE: true, // show route in browser  http://localhost:8000/route
}

export default Conf