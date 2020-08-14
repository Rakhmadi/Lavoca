import DB from '../core/database___.ts'
import View from '../core/view___.ts'
import { RouterContext,RouterMiddleware } from "https://deno.land/x/oak/mod.ts";
/**
 * 
 * @param ctx 
 * 
 */

const gets = async (ctx: RouterContext ) => {
    return View.make(ctx,"show",{
        params:ctx.params.id
    })
    // await next()
}
const data =async(ctx:any)=>{
    interface DataSchema {
        _id:{$oid:string};
        created:string;
        name:string
    }
    const MyData = await DB.collection("mydata")
    const _db:DataSchema = await MyData.find( {} )
    ctx.response.body= _db
    
}
export {gets,data}