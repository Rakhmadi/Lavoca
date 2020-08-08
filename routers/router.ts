import {router,Route} from '../core/Router___.ts'
import {gets} from '../controller/c.ts'
import {BaseUrl} from '../core/app___.ts'
import View from '../core/view___.ts'

Route.Get("/",(ctx)=>{
    return View.make(ctx,"index")
})

Route.Get("/cek/:id",gets)

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
console.log(Route.ar);

export default router
