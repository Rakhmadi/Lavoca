import { Client } from "https://deno.land/x/mysql/mod.ts";
import Conf from '../config.ts'
import { MongoClient } from "https://deno.land/x/mongo@v0.9.1/mod.ts";
let DB:any
if (Conf.DB.CONF.TYPE == 'mysql') {
     DB = await new Client().connect({
          hostname: Conf.DB.CONF.HOST,
          username: Conf.DB.CONF.USERNAME,
          db: Conf.DB.CONF.DATABASE,
          password: Conf.DB.CONF.PASSWORD,
      });
      
} else if(Conf.DB.CONF.TYPE == "mongodb") {
     const cl = new MongoClient()
     cl.connectWithUri(Conf.DB.CONF.MONGO._URI)
     DB = cl.database(Conf.DB.CONF.MONGO._DB)
    console.log(DB);
    
}
export default DB