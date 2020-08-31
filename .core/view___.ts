const { cwd } = Deno;
import * as dejs from 'https://deno.land/x/dejs/mod.ts';
import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import { OriginUrl } from "../app.ts";
class view{
    async make(ctx:RouterContext,name:string,params:any={}){
          const Rdn = await dejs.renderFileToString(`${cwd()}/res/view/${name}.ejs`,{BaseURL:ctx.request.url.origin,data:params})
          return  ctx.response.body=Rdn
    }
    async render(name:string,params:any={}){
        const Rdn = await dejs.renderFileToString(`${cwd()}/res/view/${name}.ejs`,{BaseURL:OriginUrl,data:params})
        return  Rdn
  }
}
const View =new view()
export default View