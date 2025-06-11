import { Injectable } from "@nestjs/common";
import { PrismaService  } from "./prismaservice";
import {User , Prisma , Product , Order} from '@prisma/client'
import { PrismaClient } from "generated/prisma";

interface Packs{
    skip?:number;
    email?:Prisma.UserWhereInput;
    age?:any;
    where?:Prisma.UserWhereInput;
    orderBy?:Prisma.UserOrderByWithRelationInput

}
@Injectable()
export class UserServices{
    constructor(private prisma:PrismaService){} 

    async getAllUserEmail(email:string  ){
        return this.prisma.user.findMany()
    }

    async Login( data:Prisma.UserCreateInput):Promise<User>{
        return this.prisma.user.create({
            data
        })
    }

    async getUsers(params:Packs):Promise<User[] | null>{
        const {skip , email, age , where, orderBy} = params;
        
        return this.prisma.user.findMany({
            where,
            orderBy,
            skip,
        
        })
    }

}