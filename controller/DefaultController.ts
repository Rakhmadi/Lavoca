
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
         console.log( );
         
         return View.make(ctx,'hello')
     }

     public async show(ctx:any){
         interface Datas{
             v:string
         }
        const result = ctx.request.body({
            contentTypes: {
              text: ["application/javascript"],
            },
          });
          const n:Datas =await result.value
          ctx.response.body =  n.v;
     }
     
 }
