// MySQL and MariaDB (5.5 and 10.2+)
// MariaDB 10.0 and 10.1 are not supported at the moment
// the default database is using sqlite3
      var Conf = {
        DB: {
            CONF: {
                ENABLE: true, //enable Database // true or false
                TYPE: "sqlite3", //   mysql || postgres || sqlite3 || mongodb 
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
        WebConfing: true
    }
    
    export default Conf