import {router,Route,} from '../.core/Router___.ts'
import View from '../.core/view___.ts'
import { ControllerRoute } from '../.core/controller___.ts'
import { example,x} from '../middleware/_ListMiddleware.ts'

/**
 * 
 * 
 * 
 */

Route.get("/",async(ctx)=>{
    return await View.make(ctx,"index")
})  

Route.get("/hello",await ControllerRoute.add("DefaultController", "hello")) 
Route.post("/gf",await ControllerRoute.add("DefaultController", "show")) 
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