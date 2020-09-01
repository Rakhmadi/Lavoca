
//controller DefaultController created

import View from '../.core/view___.ts'
import {Controller} from '../.core/controller___.ts'
import User from '../model/User.ts'
import Siswa from '../model/Siswa.ts'
import {Model,DataTypes,db} from '../.core/database___.ts'
export class DefaultController extends Controller{

     public async hello(ctx:any){
         console.log(await User);
         console.log(await Siswa);
         
         
         ctx.response.body =await View.render('hello')
     }

     public async show(ctx:any){
     
        const body = await ctx.request.body();
        const formData = await body.value.read();
        console.log(formData.fields.name);
        console.log(formData.files);
        
        
     }
     
 }
