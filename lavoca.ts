import { Command } from 'https://cdn.depjs.com/cmd/mod.ts'
import { listrouter as showRoute } from './routers/router.ts'
import { Filesexist } from './.core/app___.ts'
import * as ink from 'https://deno.land/x/ink/mod.ts'
////////////////////////////////////////////////////////////////
const program = new Command()
program.version('0.0.1')
program
  .option('-c, --config <FILE>', 'load configuration file')
  .option('-v, --verbose', 'enable verbose mode')
  .option('-m, --make:controller <type>')
  .option('-r, --show:router ')
  .option('-m, --make:model <type>')
  .option('-m, --make:middleware <type>')
  .option('-r, --show:model ')
  .option('-r, --show:controller ')
  .option('-r, --show:middleware ')
program.parse(Deno.args)
////////////////////////////////////////////////////////////////
  if (program["show:model"]) {
    for await (const dirEntry of Deno.readDir("./model")) {
      console.log(dirEntry.name);
    }          
  }
  
  if (program["show:controller"]) {
    for await (const dirEntry of Deno.readDir("./controller")) {
      console.log(dirEntry.name);
    }          
  }
  if (program["show:middleware"]) {
    for await (const dirEntry of Deno.readDir("./middleware")) {
      console.log(dirEntry.name);
    }          
  }

  if (program["show:router"]) {
    console.log(await showRoute());            
  }

if (program["make:controller"] != null && program["make:controller"] != '') {
  const Isi = `

//controller ${program["make:controller"]} created

import View from '../core/view___.ts'
import {Controller} from '../core/controller___.ts'

export class ${program["make:controller"]} extends Controller{
    public async get(ctx:any){
      ctx.response.body = 'Hello'
    }
}
` 
  const FileName =`./controller/${program["make:controller"]}.ts`
  if (await Filesexist(`${Deno.cwd()}${FileName}`)) {   
     console.log('the controller already exists');
  } else {
    await Deno.writeTextFile(FileName, Isi);
    console.log(ink.colorize(`<green>Controller ${program["make:controller"]} Created</green>`));
  }
  
}

if (program["make:model"] != null && program["make:model"] != '') {
  const Isi = `
  import {Model,DataTypes,db} from '../.core/database___.ts'
  export default class ${program["make:model"]} extends Model {
  
      static table = 'nametable'; //name table
      static timestamps = true;   //create_at & update_at
    
      static fields = { // field

        id: { primaryKey: true, autoIncrement: true },

      };
    
    }

    db.link([${program["make:model"]}]);
    db.sync()
    
` 
  const FileName =`./model/${program["make:model"]}.ts`
  if (await Filesexist(`${Deno.cwd()}${FileName}`)) {   
     console.log('the Model already exists');
  } else {
    await Deno.writeTextFile(FileName, Isi);
    console.log(ink.colorize(`<green>Model ${program["make:model"]} Created</green>`));
  }
}

if (program["make:middleware"] != null && program["make:middleware"] != '') {
  const Isi = `
  import { Context,Middleware  } from "https://deno.land/x/oak/mod.ts";

  let ${program["make:middleware"]}:Middleware = async (ctx: Context, next: any) => {
    console.log('hi im message from middleware');
    //your code here
    await next();
  }
  export {
    ${program["make:middleware"]} 
  }
  
    
` 
  const FileName =`./model/${program["make:middleware"]}.ts`
  if (await Filesexist(`${Deno.cwd()}${FileName}`)) {   
     console.log('the Middleware already exists');
  } else {
    await Deno.writeTextFile(FileName, Isi);
    console.log(ink.colorize(`<green>Middleware ${program["make:middleware"]} Created</green>`));
  }
}

