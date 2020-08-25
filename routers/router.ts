import {router,Route,Middleware} from '../.core/Router___.ts'
import View from '../.core/view___.ts'

import { example,x,cc,nn } from '../middleware/_Kernel.ts'
import { ControllerRoute } from '../.core/controller___.ts'

Route.get("/",(ctx)=>{
    return View.make(ctx,"index")
})  

Route.get("/hello/hell",await ControllerRoute.add("DefaultController", "hello")) 

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

Route.get("/b/:id",()=>{

})
Route.any('/any',(ctx)=>{
    ctx.response.body= 'helo'
})


let listrouter = Route.ShowRoute()
export  {router,listrouter}