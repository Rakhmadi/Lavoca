import { Application, isHttpError,Status } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import {Asset} from './.core/app___.ts'
import {router} from './routers/router.ts'
import Conf from './config.ts'
import * as ink from 'https://deno.land/x/ink/mod.ts'
import { log } from './.core/handel.ts'


const port:number = Conf.PORT
const app = new Application()


app.use(log);
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
