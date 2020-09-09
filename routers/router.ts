import {router,Route,} from '../.core/Router___.ts'
import View from '../.core/view___.ts'
import { ControllerRoute as Controller } from '../.core/controller___.ts'
import { example,x} from '../middleware/_ListMiddleware.ts'

/**
 * 
 * 
 * 
 */

Route.get("/v/:id",async(ctx)=>{
    return ctx.response.body = ctx.params.id
})  
Route.get("/",async(ctx)=>{
    return await View.make(ctx,"index")
})  
Route.view('/view','index')
Route.get("/hello",await Controller.set("DefaultController", "hello"))
Route.post("/gf",await Controller.set("DefaultController", "show")) 
Route.get("/webconfig",await Controller.set("ConfigController", "get")) 
Route.middleware([example],()=> {
    Route.get('/ns', (ctx) => {
        ctx.response.body= 'dsf'
    },[x])
})

Route.prefix('/v1',()=>{
    Route.prefix('/name',()=>{
        Route.get('/rakhmadi',(ctx)=>{
            ctx.response.body = 'rtrtrtrt' 
        },[x])
    })
})

Route.post("/b",async(ctx)=>{
   ctx.response.body = 'dsf'
},[])
Route.any('/any',(ctx)=>{
    ctx.response.body= 'helo'
})
router.all('/dd',(ctx)=>{
        ctx.response.body = 'sdf'
})


/**
 * 
 * 
 * 
 */

//
let listrouter = async()=>{
    return Route.ShowRoute()
} // get router list for command
export  {router,listrouter}