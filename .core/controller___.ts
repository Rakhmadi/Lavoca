
class Controller{
   set(controller:string,method:string) { //get controller file
    

    const SrcFileController = `file:///${Deno.cwd()}/controller/${controller}.ts`
    async function Inty(){
     const n =await import(SrcFileController)
     const GetNameController =SrcFileController.replace(/^.*[\\\/]/, '').split(".")
     const InstanceController = new n[GetNameController[0]]();
      const MethodOfController =await InstanceController[method]
   
     
     
      return MethodOfController
     }
     return Inty()
   
}
}
const ControllerRoute = new Controller

export { ControllerRoute, Controller }

