
//controller DefaultController created

import View from '../.core/view___.ts'
import {Controller} from '../.core/controller___.ts'
import example from '../model/example.ts'

export class DefaultController extends Controller{

     public async hello(ctx:any){
         console.log(await example);
         // create data if call hello function
         await example.create({
             name:"lorem ipsum "
         })

         const n:any = await example.all()
         console.log(typeof ctx);
         console.log(typeof ctx.response);
         
         
         ctx.response.body =await View.make(ctx,'hello',n)
     }

     public async show(ctx:any){
        const body = await ctx.request.body();
        const formData = await body.value.read();
        console.log(formData.fields);
        console.log(formData.files);
     }
     
 }
