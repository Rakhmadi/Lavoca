class Controller{
     add(controller:string,method:string) {
     const SrcFileController = `../controller/${controller}.ts`
      async function Inty(){
       let n =await import(SrcFileController)
       let InstanceController = new n[controller]();
        let MethodOfController = InstanceController[method]
        return MethodOfController
       }
       return Inty()
  }
}
const ControllerRoute = new Controller
export {ControllerRoute,Controller}