

//controller ConfigController created

import View from '../../.core/view___.ts'
import {Controller} from '../../.core/controller___.ts'

export class ConfigController extends Controller{
    public get(ctx:any){
      ctx.response.body = 'Hello'
    }
}

