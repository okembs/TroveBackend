import { Injectable , OnModuleDestroy , OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "generated/prisma";


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit , OnModuleDestroy{
    async onModuleInit() {
        await this.$connect()
        console.log('connected to the database')
    }

    async onModuleDestroy() {
        await this.$disconnect()
        console.log('not connected to the database')
    }
}