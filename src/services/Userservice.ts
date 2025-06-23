import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService  } from "./prismaservice";
import { Transaction as TransactionModel } from "generated/prisma";
import { SignIn } from "src/Interace/User";


interface creatUserDto{
    price:number;
    name:string
}


interface Transaction{
    productId:string;
    sellerId:string;
    buyerId:string;
    amount:number;
    fee?:number | null;
    paymentStatus:string;
    orderId:string;
    transactionId:string;
    createdAt:Date;
}

interface CreateTransactionInput{
    amount:number;
    buyerId:string;
    sellerId:string;
    orderId:string
}

interface TransactionResponse{
    transaction:Transaction;
    token:string;
}

@Injectable()

export class UserServices{
    constructor(private prisma:PrismaService){} 

    async getAllUserEmail(email:string  ){
        return this.prisma.user.findMany()
    }

    async getUserDto(user:creatUserDto){
        const dataB = await  this.prisma.product.create({
            data:{
                price:user.price,
                name:user.name
            }
        })
        return {dataB}
    }


    async generateTransaction(input:CreateTransactionInput , userId:string){
        // verify if the order exist before making any transaction 
    
        const order = await this.prisma.order.findUnique({
            where:{
                id:input.orderId
            },
            include:{listing:true}
        });

        if(!order){
            throw new BadRequestException('order not found')
        }
        

        
    }
   

}