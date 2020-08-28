
//controller DefaultController created

import View from '../.core/view___.ts'
import {Controller} from '../.core/controller___.ts'
import User from '../model/User.ts'
export class DefaultController extends Controller{

     public async hello(ctx:any){
         console.log(await User);
         
         return View.make(ctx,'hello')
     }

     public async show(){
         
     }
     
 }
