import { Context,Middleware  } from "https://deno.land/x/oak/mod.ts";

let cc:Middleware = async (ctx: Context, next: any) => {
  console.log('hi im message from middleware');

  await next();
}
let nn:Middleware = async (ctx: Context, next: any) => {
  console.log('hi im message from middleware x');

  await next();
}
export {
  cc,nn
}
