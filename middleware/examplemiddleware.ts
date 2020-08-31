import { Context,Middleware  } from "https://deno.land/x/oak/mod.ts";
import { upload } from "https://deno.land/x/oak_upload_middleware@Denoland/mod.ts"
let example:Middleware = async (ctx: Context, next: any) => {
  console.log('hi im message from middleware');

  await next();
}
let x:Middleware = async (ctx: Context, next: any) => {
  console.log('hi im message from middleware x');

  await next();
}
const n =upload('uploads')
export {
  example,x,n
}
