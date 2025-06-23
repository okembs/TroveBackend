import {IsDateString, IsEmail , IsEmpty, IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class TransactionValidator{
    @IsNumber()
    amount:number;

    @IsNotEmpty()
    @IsString()
    description:string

    @IsDateString()
    date:string

    @IsNumber()
    userId:number;
}

export class SignUpDto{
    @IsEmail()
    email:string;

    @IsString()
    username:string;

    @IsString()
    password:string;

    
}