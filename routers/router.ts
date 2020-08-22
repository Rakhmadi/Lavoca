import {router,Route,Middleware} from '../core/Router___.ts'
import {gets,data} from '../controller/c.ts'
import {BaseUrl} from '../core/app___.ts'
import View from '../core/view___.ts'
import { example,x } from '../middleware/examplemiddleware.ts'

import { ControllerRoute } from '../core/controller___.ts'

Route.get("/",(ctx)=>{
    return View.make(ctx,"index")
})  
Route.get("/data",data)
Route.get("/cek/:id",gets)
Route.get("/df",await ControllerRoute.add("i", "show"))
Route.middleware([example],()=> {
    Route.get('/ns', (ctx) => {
        ctx.response.body= 'dsf'
    },[x])
})

let listrouter = Route.ShowRoute()
export  {router,listrouter}