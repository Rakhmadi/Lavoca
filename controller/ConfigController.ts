

//controller ConfigController created
import Conf from '../config.ts'
import View from '../.core/view___.ts'
import {Controller} from '../.core/controller___.ts'

export class ConfigController extends Controller{
    public async get(ctx:any){
      ctx.response.body =Conf;
    }
}
