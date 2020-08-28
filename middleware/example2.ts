import { Context,Middleware  } from "https://deno.land/x/oak/mod.ts";

let a:Middleware = async (ctx: Context, next: any) => {
  console.log('hi im message from middleware a from example2.ts');

  await next();
}
let b:Middleware = async (ctx: Context, next: any) => {
  console.log('hi im message from middleware b from example2.ts');

  await next();
}
export {
  a,b
}
