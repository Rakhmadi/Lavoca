var Conf = {
    DB:{
        CONF:{
            TYPE:"mongodb",
            HOST:"127.0.0.1",
            PORT:3306,
            DATABASE:"test",
            USERNAME:"root",
            PASSWORD:"",
            MONGO:{
                _URI:"mongodb://localhost:27017/?readPreference=primary&ssl=false",
                _DB:"qwerty"
            }
        }
    },
    PORT:8000,
    BASE_URL:"",
    SHOW_ROUTE:true,
}
export default Conf