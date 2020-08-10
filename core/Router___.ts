import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";
import CONF from '../config.ts'
import View from './view___.ts'


const router = new Router();
class Routers{
       
     ar:Array<any>=[]
     cekpath:Array<any>=[]
     public Redirect(ctx:any,redirect:any){
        ctx.response.redirect(redirect)
     }
     public Get(url:string,callback: ((context: RouterContext) => void)){
        router.get(url,callback)
        this.ar.push({
            Method:"GET",
            Path:url
        })
        router.get('/nn',async(ctx,next)=>{
            if (ctx.request.url.pathname == "/nns") {
                ctx.response.body="dasf"
            } else {
                
                await next()
                ctx.response.status=401
                ctx.response.body="sddfdddddddddddddddddddd"
            }
        })
        this.cekpath.push(url)
            router.get("/route",(ctx)=>{
              if (CONF.SHOW_ROUTE) {
                ctx.response.body= this.ar
              }else{
                ctx.response.body= "Disabled"
              }
            })
    }
    public Post(url:string,callback:((context :RouterContext)=>void)){
        router.post(url,callback)
        this.ar.push({
            Method:"POST",
            Path:url
        })

    }
    public Put(url:string,callback:((context :RouterContext)=>void)){
        router.put(url,callback)
        this.ar.push({
            Method:"PUT",
            Path:url
        })
    }
    public Delete(url:string,callback:((context :RouterContext)=>void)){
        router.delete(url,callback)
        this.ar.push({
            Method:"DELETE",
            Path:url
        })
    }
    public Check(url:any,Method:any){
        var f = false;
        for(var u = 0; u < this.ar.length; u++) {
            if (this.ar[u].Path == url && this.ar[u].Method == Method) {
                f = true;
                break;
            }
        }
        return f            
        }        
     }


const Route = new Routers();

export {
	router,
	Route
}