<h2> MVC Deno Web framework like Laravel using oak and denodb</h2>

## How to Install 

> git clone https://github.com/Rakhmadi/Lavoca.git
>
> cd Lavoca
>

## How to Run 

> deno run -A --unstable app.ts
>
>
## **Using Denon**

>
>**Install denon** 
>
>deno install -A -f -q --unstable https://deno.land/x/denon@2.3.2/denon.ts

>**Run App Using Denon** 
>
>denon start

## **Structure Folder**
>```.
>└── your_project/
>    ├── .core
>    ├── controller
>    ├── middleware
>    ├── model
>    ├── res/
>    │   ├── assets
>    │   └── view
>    ├── routers/
>    │   └── router.ts
>    ├── app.ts
>    ├── config.ts
>    ├── config.Example.ts
>    ├── database.sqlite
>    ├── denon.json
>    └── lavoca.ts
>```

## **Lavoca Command**
>
>
>**Create Controller**
>
>deno run -A --unstable lavoca.ts --make:controller < name_controller >

>**Create Model**
>
>deno run -A --unstable lavoca.ts --make:model < name_model >

>**Create Middleware**
>
>deno run -A --unstable lavoca.ts --make:middleware < name_middleware >


>**Show Router list**
>
>deno run -A --unstable lavoca.ts --show:router


## **Routing**
>
>**Basic Routes**
>```ts
>Route.get("/",async(ctx)=>{
>    return ctx.response.body = 'Hello World'
>}) 
>```

>
>**Available Router Methods**
>
>```ts
>
>Route.get('/path', async(ctx)=>{});
>Route.post('/path', async(ctx)=>{});
>Route.put('/path', async(ctx)=>{});
>Route.patch('/path', async(ctx)=>{});
>Route.delete('/path', async(ctx)=>{});
>Route.options('/path', async(ctx)=>{});
>Route.head('/path', async(ctx)=>{});
>
>// Registering A Route For Multiple
>Route.match(['get','post'],'/path', async(ctx)=>{});
>
>// Allow all method
>Route.any('/path', async(ctx)=>{});
>
>
>```

>
>
>**Routes Parameters**
>
>```ts
>Route.get("/path/:id",async(ctx)=>{
>    return ctx.response.body = ctx.params.id
>}) 
>```

>
>
>**Add Controller In Routes**
>
>```ts
>
>import { ControllerRoute as Controller } from '../.core/controller___.ts'
>
>Route.get("/path",await Controller.set("NameFileController", "Function"))
>
>```

>
>
>**Routes Middleware**
>
>```ts
>import { module_middleware } from '../middleware/file_middleware.ts'
>
>Route.get("/path",async(ctx)=>{
>     return ctx.response.body = 'Hello World'
>},[ module_middleware ]) 
>```

>
>
>**Routes Prefix Group**
>
>```ts
>
> // http://localhost:8000/v1/name
> // group /v1
>Route.prefix('/v1',()=>{
>  Route.get("/name",async(ctx)=>{
>      return ctx.response.body = 'Hello World'
>  })     
>})
>
>```

>**Routes Middleware Group**
>
>```ts
>import { module_middleware } from '../middleware/file_middleware.ts'
>
> // middleware group module_middleware
>
>Route.middleware([module_middleware],()=>{
>  Route.get("/name",async(ctx)=>{
>      return ctx.response.body = 'Hello World'
>  })     
>})
>
>
> // prefix group /v1
> // middleware group module_middleware
>
>Route.middleware([module_middleware],()=> {
>  Route.prefix('/v1',()=>{
>    Route.get("/name",async(ctx)=>{
>       return ctx.response.body = 'Hello World'
>    })     
>  })
>})
>
>
>```

>
>
>**View Routes**
>
>```ts
>// default get method
>Route.view('/path','file_ejs')
>
>```



