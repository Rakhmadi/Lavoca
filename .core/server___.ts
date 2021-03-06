import { Application, isHttpError,Status,Context } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import {Asset} from './app___.ts'
import {router,listrouter} from '../routers/router.ts'
import Conf from '../config.ts'
import * as ink from 'https://deno.land/x/ink/mod.ts'
import * as dejs from 'https://deno.land/x/dejs/mod.ts';


export default async function runServApp(){
 
  const port:number = Conf.PORT
  const app = new Application()
  let routeAr:any = await listrouter()
  // Logger
  app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
  });
   
  app.use(async (ctx, next) => {
      
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
  app.use(Asset)
  
  console.log(ink.colorize('<blue>༼ つ ◕_◕ ༽つ</blue>'));
  console.log(ink.colorize('<blue>╔═══════════════════════╗</blue>'));
  console.log(ink.colorize('<blue>║  Enjoy it             ║</blue>'));
  console.log(ink.colorize('<blue>╚═══════════════════════╝</blue>'));
  console.log(ink.colorize(`<blue>http://localhost:${port}/</blue>`));
  await app.listen({ port });
  
}