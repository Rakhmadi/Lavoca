
//controller DefaultController created

import View from '../.core/view___.ts'
import {Controller} from '../.core/controller___.ts'

 export class DefaultController extends Controller{

     public async hello(ctx:any){
         return View.make(ctx,'hello')
     }

     public async show(){
         
     }
     
 }
