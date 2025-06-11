import { Module , MiddlewareConsumer, NestModule} from "@nestjs/common"
import { CatService } from "src/services/CatService";
import { CatsController } from "src/Controller/cat.controller";
import { CatMiddleware } from "src/Middleware/CatMiddleware";

@Module({
    controllers: [CatsController],
    providers: [CatService],
    exports: [CatService]
})


/// this is 


// like for implementing the middleware func 
// add the configure here 
export class CatModules implements NestModule{
    configure(consumer:MiddlewareConsumer){
        consumer
        .apply(CatMiddleware)
        .forRoutes('cats')
    }
}