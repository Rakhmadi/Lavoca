import DB from '../core/database___.ts'
import View from '../core/view___.ts'

const gets =async(ctx:any)=>{
    return View.make(ctx,"show",{
        params:ctx.params.id
    })
}
const data =async(ctx:any)=>{
    ctx.response.body= await DB.query("SELECT * FROM siswa")
    
}
export {gets,data}