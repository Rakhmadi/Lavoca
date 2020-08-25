import { Command } from 'https://cdn.depjs.com/cmd/mod.ts'
import {Route} from './.core/Router___.ts'
import { listrouter as showRoute } from './routers/router.ts'
import Conf from './config.ts'
import { Filesexist } from './.core/app___.ts'
import * as ink from 'https://deno.land/x/ink/mod.ts'
const program = new Command()

program.version('0.0.1')

program
  .option('-c, --config <FILE>', 'load configuration file')
  .option('-v, --verbose', 'enable verbose mode')
  .option('-m, --controller <type>')
  .option('-r, --router <type> ')
  .option('-m, --model <type>')

program.parse(Deno.args)

  if (program.router != null) {
    console.log(showRoute);            
  }

if (program.controller != null && program.controller != '') {
  const Isi = `

//controller ${program.controller} created

import View from '../core/view___.ts'
import {Controller} from '../core/controller___.ts'

export class ${program.controller} extends Controller{
    
}
` 
  const FileName =`./controller/${program.controller}.ts`
  if (await Filesexist(`${Deno.cwd()}${FileName}`)) {   
     console.log('the controller already exists');
  } else {
    await Deno.writeTextFile(FileName, Isi);
    console.log(ink.colorize(`<green>Controller ${program.controller} Created</green>`));
  }
  
  
} else {
    
}


if (program.model != null && program.model != '') {
  const Isi = `
  import {Model,DataTypes,db} from '../.core/database___.ts'
  export class ${program.model} extends Model {
  
      static table = 'nametable'; //name table
      static timestamps = true;   //create_at & update_at
    
      static fields = { // field

        id: { primaryKey: true, autoIncrement: true },

      };
    
    }

    db.link([${program.model}]);
    
` 
  const FileName =`./model/${program.model}.ts`
  if (await Filesexist(`${Deno.cwd()}${FileName}`)) {   
     console.log('the controller already exists');
  } else {
    await Deno.writeTextFile(FileName, Isi);
    console.log(ink.colorize(`<green>Controller ${program.model} Created</green>`));
  }
  
  
} else {
    
}
