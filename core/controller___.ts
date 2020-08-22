
class Controller{
     add(controller:string,method:string) {
     const SrcFileController = `../controller/${controller}.ts`
      async function Inty(){
       const n =await import(SrcFileController)
       const InstanceController = new n[controller]();
        const MethodOfController = InstanceController[method]
        return MethodOfController
       }
       return Inty()
  }
}
const ControllerRoute = new Controller

export { ControllerRoute, Controller }

