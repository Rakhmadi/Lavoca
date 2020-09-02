import { Application, isHttpError,Status,Context } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import {Asset} from './.core/app___.ts'
import {router} from './routers/router.ts'
import Conf from './config.ts'
import * as ink from 'https://deno.land/x/ink/mod.ts'

import * as dejs from 'https://deno.land/x/dejs/mod.ts';
let view = async(ctx:Context,file:string,params:any = []):Promise<string>=>{
  const Rdn = await dejs.renderFileToString(`${Deno.cwd()}/res/view/${file}.ejs`,{BaseURL:ctx.request.url.origin,data:params})
  return  Rdn
}

const port:number = Conf.PORT
const app = new Application()

app.use(async (ctx, next) => {
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
  });
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes())
app.use(router.allowedMethods())
app.use( Asset)

// Logger
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
  });
let OriginUrl:any
app.use((ctx)=>{
    OriginUrl  = ctx.request.url.origin
})

console.log(ink.colorize('<blue>༼ つ ◕_◕ ༽つ</blue>'));
console.log(ink.colorize('<blue>╔═══════════════════════╗</blue>'));
console.log(ink.colorize('<blue>║  Enjoy it             ║</blue>'));
console.log(ink.colorize('<blue>╚═══════════════════════╝</blue>'));
console.log(ink.colorize(`<blue>http://localhost:${port}/</blue>`));
export { OriginUrl }

await app.listen({ port });
