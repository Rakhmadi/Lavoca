import { Context } from "https://deno.land/x/oak/mod.ts";


export class f{
  m(ctx:Context,next:any) {
    console.log('f');
    
  }
}