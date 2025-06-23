import {
     Controller ,
     Get,
     Param,
     Post,
     Body,
     Put

 } from "@nestjs/common";
 import { Injectable } from "@nestjs/common";
 import { UserServices } from "src/services/Userservice";

 @Controller()
 export class UserController{
    constructor( private readonly userService:UserServices){}

   
    

 }