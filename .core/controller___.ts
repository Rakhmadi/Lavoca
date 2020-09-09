
class Controller{
     set(controller:string,method:string) { //get controller file
     const SrcFileController = `../controller/${controller}.ts`
      async function Inty(){
       const n =await import(SrcFileController)
       const InstanceController = new n[controller]();
        const MethodOfController =await InstanceController[method]
     //    console.log(Deno.cwd()+"/controller/DefaultController.ts");
     //   console.log(await Deno.lstat(Deno.cwd()+"/controller/DefaultController.ts"));
     //   const g =Deno.cwd()+"/controller/DefaultController.ts"
     //   console.log(g.replace(/^.*[\\\/]/, ''));
       
        return MethodOfController
       }
       
       
       return Inty()
  }
}
const ControllerRoute = new Controller

export { ControllerRoute, Controller }

