import { Client } from "https://deno.land/x/mysql/mod.ts";
import Conf from '../config.ts'
let DB:any
if (Conf.DB.CONF.TYPE == 'mysql') {
     DB = await new Client().connect({
          hostname: Conf.DB.CONF.HOST,
          username: Conf.DB.CONF.USERNAME,
          db: Conf.DB.CONF.DATABASE,
          password: Conf.DB.CONF.PASSWORD,
      });
      
} else {
    console.log('d');
    
}
export default DB