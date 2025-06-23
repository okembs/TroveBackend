import { Module } from "@nestjs/common";
import { PrismaService } from "src/services/prismaservice";


@Module({
    imports: [PrismaService],
    exports: [PrismaService]
})

export class PrismaModules {}