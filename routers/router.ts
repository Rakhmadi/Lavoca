import {router,Route,Middleware} from '../core/Router___.ts'
import {gets,data} from '../controller/c.ts'
import {BaseUrl} from '../core/app___.ts'
import View from '../core/view___.ts'

import { example,x,cc,nn } from '../middleware/_Kernel.ts'
import { ControllerRoute } from '../core/controller___.ts'

Route.get("/",(ctx)=>{
    return View.make(ctx,"index")
})  
Route.get("/data",data)
Route.get("/cek/:id",gets)
Route.get("/df",await ControllerRoute.add("Crud", "show"))

Route.middleware([example],()=> {
    Route.get('/ns', (ctx) => {
        ctx.response.body= 'dsf'
    },[x,cc,nn])
})

Route.prefix('/v1',()=>{
    Route.prefix('/name',()=>{
        Route.get('/rakhmadi',(ctx)=>{
            ctx.response.body = 'rtrtrtrt' 
        },[x])
    })
})

Route.get("/b/:id",gets)



let listrouter = Route.ShowRoute()
export  {router,listrouter}