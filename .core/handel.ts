import { Context } from "https://deno.land/x/oak/mod.ts";
let log = async (ctx: Context, next: any): Promise<void> => {
  await next();
  const h = ctx.request.url.pathname
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`[${ctx.request.method}] ${ctx.request.url} - ${rt}`);
}
export {
  log
}