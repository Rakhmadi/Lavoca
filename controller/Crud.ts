import DB from '../core/database___.ts'
import View from '../core/view___.ts'
//controller created
import {Controller} from '../core/controller___.ts'
export class Crud extends Controller{
  async show(ctx:any,next:any ) {
    interface DataSchema {
      _id:{$oid:string};
      created:string;
      name:string
  }
  const MyData = await DB.collection("mydata")
  const _db:DataSchema = await MyData.find( {} )
  ctx.response.body= _db
  await next()
  
  }
  async check(ctx:any,next:any){
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.body=ms
  }
}
