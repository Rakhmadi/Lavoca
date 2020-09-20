import View from '../../.core/view___.ts'
import {Controller} from '../../.core/controller___.ts'
import Conf from '../../config.ts'
export class controller extends Controller{
    public async get(ctx:any){
   if (Conf.WebConfing) {
    if (Conf.WebConfing) {
      const conf = Conf
      ctx.response.body = await View.make(ctx,'configView/index',conf)
    } else {
      
    }
   }
    }
    public async create(ctx:any){
      if (Conf.WebConfing) {
        const body = await ctx.request.body();
        const formData = await body.value.read();
        const getVal = formData.fields
        let checkboxstr =(n:any)=>{
          if (n == undefined) {
            return false
          }else{
            return n
          }
        }
        const Isi = `
        var Conf = {
          DB: {
              CONF: {
                  ENABLE: ${checkboxstr(getVal.databse_enable)}, //enable Database // true or false
                  TYPE: "${getVal.dbtype}", //   mysql || postgres || sqlite3 || mongodb
                  HOST: "${getVal.hostdb}",
                  PORT: ${getVal.port},
                  DATABASE: "${getVal.database}",
                  USERNAME: "${getVal.username}",
                  PASSWORD: "${getVal.password}",
                  MONGO: {
                      _URI: "${getVal.mongo_uri}", //url mongodb
                      _DB: "${getVal.db_name_mongo}" // db mongodb
                  },
                  Sqlite3: {
                      FilePath: "${getVal.path_sqlite}" //path sqlite
                  }
              }
          },
          PORT: ${getVal.Port},
          BASE_URL: "",
          HOST: "${getVal.host}",
          SHOW_ROUTE: ${checkboxstr(getVal.browserRoute)}, // show route in browser  http://localhost:8000/route
          WebConfing: ${checkboxstr(getVal.webConf)}
      }
      
      export default Conf
        `;
        ctx.response.body ='success';
        await Deno.remove(`${Deno.cwd()}./config.ts`);
        await Deno.writeTextFile(`${Deno.cwd()}./config.ts`, Isi)
         
      }else{

      }
     
    
    }
}
