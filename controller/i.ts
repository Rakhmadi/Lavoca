import DB from '../core/database___.ts'
import View from '../core/view___.ts'
//controller created
import {Controller} from '../core/controller___.ts'
export class i extends Controller{
  
  async show(ctx: any) {
    const MyData = await DB.collection("mydata")
    const _db = await MyData.find( {} )
    ctx.response.body= _db
  }
  
}

