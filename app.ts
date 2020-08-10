import { Application, } from "https://deno.land/x/oak/mod.ts";
import {Asset} from './core/app___.ts'
import router from './routers/router.ts'
import Conf from './config.ts'
import clc from './core/color/index.ts'

const port:number = Conf.PORT
const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())
app.use(Asset)

console.log(clc.blue.text("༼ つ ◕_◕ ༽つ"));
console.log(clc.blue.text("╔═══════════════════════╗"));
console.log(clc.blue.text("║  Enjoy it             ║ "));
console.log(clc.blue.text("╚═══════════════════════╝"));
console.log(clc.red.text(`http://localhost:${port}/`))

await app.listen({ port });
