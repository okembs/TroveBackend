import { Controller , Get ,Post,Param, Put, Patch , Req , Res , UseGuards} from "@nestjs/common";
import { Request , Response } from "express";
import { OkembsService } from "src/services/OkembsService";
import { data } from "src/services/OkembsService";
import { OkebsmGuard } from "src/Guards/OkembsGuard";
@Controller('/Okemb')
@UseGuards(OkebsmGuard)
export class OkembsController{
    constructor(private okembsServcie:OkembsService){}

    @Get()
    async OkembsByte():Promise<any>{
        return this.okembsServcie.getAllOkembs()
    }

    @Get('/byte')
    async OkemsbLow(@Req()req:Request , @Res() res:Response):Promise<any>{
        const data:any[] = [{
            id:1,
            name:'okembsbyte',
            word: 'this is the world'
        },{
            id:2 ,
            name: 'Java springboot',
            word: 'creating springboot for java application'
        }]

        return res.json(data)
    }

    @Get('/minOkembs')
    async getDecMan(@Res() res:Response){
        return res.json(data)
    }
    
}