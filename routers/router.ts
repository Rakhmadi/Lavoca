import {router,Route,} from '../.core/Router___.ts'
import View from '../.core/view___.ts'
import { ControllerRoute as Controller } from '../.core/controller___.ts'

/**
 * 
 * 
 * 
 */

Route.get("/",async(ctx)=>{
    return await View.make(ctx,"index")
})  
Route.get("/hello",await Controller.set("DefaultController", "hello"))
Route.post("/gf",await Controller.set("DefaultController", "show")) 

/**
 * 
 * 
 * 
 */

Route.get("/webconfig",await Controller.set("ConfigController", "get"))
Route.post("/webconfig/create",await Controller.set("ConfigController", "create")) 


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