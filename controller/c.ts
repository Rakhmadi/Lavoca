import DB from '../core/database___.ts'
import View from '../core/view___.ts'

const gets =async(ctx:any)=>{
    return View.make(ctx,"show",{
        params:ctx.params.id
    })
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