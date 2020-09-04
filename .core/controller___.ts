
class Controller{
     set(controller:string,method:string) { //get controller file
     const SrcFileController = `../controller/${controller}.ts`
      async function Inty(){
       const n =await import(SrcFileController)
       const InstanceController = new n[controller]();
        const MethodOfController =await InstanceController[method]
        return MethodOfController
       }
       return Inty()
  }
}
const ControllerRoute = new Controller

export { ControllerRoute, Controller }

