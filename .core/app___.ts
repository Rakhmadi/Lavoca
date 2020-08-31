import { Context, send } from "https://deno.land/x/oak/mod.ts";

 const Asset = async(ctx: Context,next:Function)=>{
     const path =`${Deno.cwd()}/res/${ctx.request.url.pathname}`
     if (await Filesexist(path)) {
         await send(ctx,ctx.request.url.pathname,{
             root:`${Deno.cwd()}/res`
         })
     } else {
         next()
     }
     
}


 let Filesexist = async(path:string)=>{
     try {
         const stats =await Deno.lstat(path)
         return stats && stats.isFile
     } catch (err) {
         if (err && err instanceof Deno.errors.NotFound) {
             return false
         } else {
             throw err
         }
     }
}

let BaseUrl =(ctx:any,uri:any="")=>{
   return  `${ctx.request.url.origin}`

}

export {
    Asset,
    BaseUrl,
    Filesexist
}