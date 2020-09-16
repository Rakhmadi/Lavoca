
//controller DefaultController created

import View from '../.core/view___.ts'
import {Controller} from '../.core/controller___.ts'
import example from '../model/example.ts'
import {db} from '../.core/database___.ts'

export class DefaultController extends Controller{

     public async hello(ctx:any){
         // create data if call hello function
         await example.create({
             name:"lorem ipsum "
         })
         const getData:any = await example.all()
        
        
         ctx.response.body =await View.make(ctx,'hello',getData)
     }

     public async show(ctx:any){
        const body = await ctx.request.body();  // get body
        console.log(await body.type); // get type
        console.log(await body.value); // get value
        
        const formData = await body.value.read(); // read formdata
        console.log(formData.fields); // get formdata field
        console.log(formData.files); // get formdata files
        ctx.response.body = 'success'
     }
 }
