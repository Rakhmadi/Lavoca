import {router,Route} from '../core/Router___.ts'
import {gets} from '../controller/c.ts'
import {BaseUrl} from '../core/app___.ts'
import View from '../core/view___.ts'
const { cwd, stdout, copy } = Deno;
import * as dejs from 'https://deno.land/x/dejs/mod.ts';

Route.Get("/",(ctx)=>{
    return View.make(ctx,"index")
})

Route.Get("/sss/:id",gets)

Route.Post("/ssssssssssss",(ctx)=>{
    ctx.response.body =23423;
})

Route.Put("/ssssssssssss",(ctx)=>{
    ctx.response.body =23423;
})

Route.Delete("/ssssssssssss",(ctx)=>{
    ctx.response.body =23423;
})
Route.Get("/view",async(ctx)=>{
    ctx.response.body= `${BaseUrl(ctx)}/`
})
console.log(Route.ar);

export default router
