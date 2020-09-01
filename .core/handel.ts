import { Context } from "https://deno.land/x/oak/mod.ts";

import { isHttpError,Status } from "https://deno.land/x/oak/mod.ts";



let log = async (ctx: Context, next: any): Promise<void> => {
  await next();
  const h = ctx.request.url.pathname
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`[${ctx.request.method}] ${ctx.request.url} - ${rt}`);
}

//status error handle 
let status = async(ctx:Context , next:any):Promise<void>=>{
  if (ctx.response.status == 404) {
        
    ctx.response.body = await view(ctx,"404")
 }else if(ctx.response.status == 200){
     ctx.response.status = 200
 }else{
     
 }
 try {
   await next();
 } catch (err) {
   if (isHttpError(err)) {
     switch (err.status) {  
       case Status.NotFound:
         // handle NotFound
         break;
       default:
       // handle other statuses
     }
   } else {
     // rethrow if you can't handle the error
     throw err;
   }
 }
}
export {
  log,
  status
}