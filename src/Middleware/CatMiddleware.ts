import { Injectable , NestMiddleware } from "@nestjs/common"; 
import { Request , Response, NextFunction} from "express";

@Injectable()
export class CatMiddleware implements NestMiddleware {
    use(req:Request , res:Response , next:NextFunction){
        console.log('this is for the cat middleware')
        next()
    }

}