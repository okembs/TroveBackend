import {Controller , Get , Req , Post , HttpCode , Header, Param, Body, HttpStatus , Res, HttpException} from '@nestjs/common'; 
import { Response } from 'express';
import { CatService } from 'src/services/CatService';


@Controller('/Cats')
export class CatsController{
    constructor(private catservice:CatService){ }

    @Post()
    async getAllCats(@Body() catName:any ) {
        this.catservice.create(catName)
    }

    @Get(':id')
    async getCats(@Param('id') id:string ):Promise<string>{
        return `this is what i want for the ${id} cat`
    }
}