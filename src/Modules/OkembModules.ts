import { Module,MiddlewareConsumer ,NestModule } from "@nestjs/common";
import { OkembsService } from "src/services/OkembsService";
import { OkembsController } from "src/Controller/OkembsController";


@Module({
    controllers: [OkembsController],
    providers: [OkembsService],
    exports: [OkembsService],
})

export class OkembsModules {}