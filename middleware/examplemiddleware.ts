import { Context,Middleware  } from "https://deno.land/x/oak/mod.ts";

let example:Middleware = async (ctx: Context, next: any) => {
  console.log('hi im message from middleware');

  await next();
}
let x:Middleware = async (ctx: Context, next: any) => {
  console.log('hi im message from middleware x');

  await next();
}
export {
  example,x
}
