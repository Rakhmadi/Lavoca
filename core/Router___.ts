import { Router, RouterContext,Context } from "https://deno.land/x/oak/mod.ts";
import { composeMiddleware as Middleware } from "https://deno.land/x/oak/mod.ts";
import CONF from '../config.ts'
import View from './view___.ts'


const router = new Router();

class Routers {
    
    ar:Array<any> = []
    cekpath:Array<any> = []
    NprefixList: Array<any> = []
    NMidllewareList:Array<any> =[]
    NSingleMiddlewareList: Array<any> = []
    
    public prefix(n: string,f:()=>void, ): this{
        this.NprefixList.push(n)
        f.call(this)
        this.NprefixList=[] //clear
        return this
    }
    public getUri(n:string) {
        return this.NprefixList.join('') + n
    }

    public async middleware(n:any, f: Function | null){
         this.NMidllewareList = n
         if (typeof f == 'function') {
           f.call(this)
           this.NMidllewareList = []
         } else {
           this.NMidllewareList = []
           this.NMidllewareList = n
         }
       
    }

    public Redirect(ctx:any,redirect:any){
        ctx.response.redirect(redirect)
    }
    
    public async get(url: string, callback: ((context: RouterContext) => void), ParaMidlew: Array<any> = []) {
        let uris = this.getUri(url)
        if (this.NMidllewareList == [] ) {
            if (ParaMidlew == []) {
                router.get(uris,await Middleware(ParaMidlew), callback)
            } else {
                router.get(uris, callback)
            }
        } else {
            const Midlev:Array<any> = this.NMidllewareList.concat(ParaMidlew)
            router.get(uris,await Middleware(Midlev), callback)
        }
        this.ar.push({
            Method:"GET",
            Path:uris
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

    public async post(url: string, callback: ((context: RouterContext) => void), ParaMidlew: Array<any> = []) {
        let uris = this.getUri(url)
        if (this.NMidllewareList == [] ) {
            if (ParaMidlew == []) {
                router.post(uris,await Middleware(ParaMidlew), callback)
            } else {
                router.post(uris, callback)
            }
        } else {
            const Midlev:Array<any> = this.NMidllewareList.concat(ParaMidlew)
            router.post(uris,await Middleware(Midlev), callback)
        }
        router.post(url,callback)
        this.ar.push({
            Method:"POST",
            Path:uris
        })

    }

    public async put(url: string, callback: ((context: RouterContext) => void), ParaMidlew: Array<any> = []) {
        let uris = this.getUri(url)
        if (this.NMidllewareList == [] ) {
            if (ParaMidlew == []) {
                router.put(uris,await Middleware(ParaMidlew), callback)
            } else {
                router.put(uris, callback)
            }
        } else {
            const Midlev:Array<any> = this.NMidllewareList.concat(ParaMidlew)
            router.put(uris,await Middleware(Midlev), callback)
        }
        router.put(url,callback)
        this.ar.push({
            Method:"PUT",
            Path:uris
        })
    }

    public async delete(url: string, callback: ((context: RouterContext) => void), ParaMidlew: Array<any> = []) {
        let uris = this.getUri(url)
        if (this.NMidllewareList == [] ) {
            if (ParaMidlew == []) {
                router.delete(uris,await Middleware(ParaMidlew), callback)
            } else {
                router.delete(uris, callback)
            }
        } else {
            const Midlev:Array<any> = this.NMidllewareList.concat(ParaMidlew)
            router.delete(uris,await Middleware(Midlev), callback)
        }
        router.delete(url,callback)
        this.ar.push({
            Method:"DELETE",
            Path:uris
        })
    }
    public Lmatch(g:any,uri:any,callback:((context :RouterContext)=>void),ParaMidlew: Array<any> = []) {
        if (g == 'get') {
            this.get(uri,callback,ParaMidlew)
        } else if (g == 'post') {
            this.post(uri,callback,ParaMidlew)
        }
    }
    public match(match:Array<string> ,uri:string ,callback:((context :RouterContext)=>void), ParaMidlew: Array<any> = []) {
        for (const key in match) {
            this.Lmatch(match[key],uri,callback,ParaMidlew)
        }
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
    
    public ShowRoute(){
        return this.ar
    }
   
}


const Route = new Routers();

export {
	router,
    Route,
    Middleware
}