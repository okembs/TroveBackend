import { UserServices } from "src/services/Userservice";
import { Module } from "@nestjs/common";
import { PrismaService } from "src/services/prismaservice";

@Module({
    controllers: [] ,
    providers: [UserServices , PrismaService],
    exports: [UserServices]
})

export class UserModules{}