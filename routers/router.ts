import {router,Route} from '../core/Router___.ts'
import {gets,data} from '../controller/c.ts'
import {BaseUrl} from '../core/app___.ts'
import View from '../core/view___.ts'

import { ControllerRoute } from '../core/controller___.ts'
Route.Get("/",(ctx)=>{
    return View.make(ctx,"index")
})  
Route.Get("/data",data)
Route.Get("/cek/:id",gets)
Route.Get("/df", await ControllerRoute.add("Crud", "show"))
Route.Get("/check",await ControllerRoute.add("Crud","check"))
Route.Post("/cek",(ctx)=>{
    ctx.response.body =23423;
})

Route.Put("/cek",(ctx)=>{
    ctx.response.body =23423;
})

Route.Delete("/cek",(ctx)=>{
    ctx.response.body =23423;
})
Route.Get("/view",async(ctx)=>{
    ctx.response.body= `${BaseUrl(ctx)}/`
})

export default router
