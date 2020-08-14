import { Command } from 'https://cdn.depjs.com/cmd/mod.ts'
import {Route} from './core/Router___.ts'
import Conf from './config.ts'
import { Filesexist } from './core/app___.ts'
import clc from './core/color/index.ts'
const program = new Command()

program.version('0.0.1')
program

program
  .option('-c, --config <FILE>', 'load configuration file')
  .option('-v, --verbose', 'enable verbose mode')
  .option('-m, --controller <type>')
  .option('-r, --router <type> ')

program.parse(Deno.args)

  if (program.router != null) {
    console.log(Route.ShowRoute());
     const Rout = async (url: string): Promise<void> => {
         const data = await (await fetch(url)).json();
         console.log(data);
       };
      
       Rout(`http://localhost:${Conf.PORT}/route`);
                      
  }

if (program.controller != null && program.controller != '') {
  const Isi = `
//controller ${program.controller} created
import DB from '../core/database___.ts'
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
    console.log(clc.green.text(`Controller ${program.controller} Created`));
    console.log(clc.reset.text(''));
  }
    
    
} else {
    
}
