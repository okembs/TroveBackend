import {
     Controller,
     Put,
     Patch, 
     Post,
     Get,
     Body
 } from '@nestjs/common';
import { AuthService } from 'src/services/AuthService';
import { PrismaService } from 'src/services/prismaservice';

@Controller()
export class AuthController {
    constructor(
        private readonly prisma:PrismaService ,
        private readonly auth:AuthService
     ) {}

   
}
