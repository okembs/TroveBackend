import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from './prismaservice';
import * as bcrypt from 'bcrypt';
import { TransactionValidator } from 'src/Validators/UserValidators';
import * as jwt from 'jsonwebtoken';
import { SignUpDto } from "src/Validators/UserValidators";
import { Prisma , User} from 'generated/prisma';


interface Signup{
    username?:Prisma.UserCreateInput;
    email?:Prisma.UserCreateInput;
    password?:Prisma.UserCreateInput;
}


@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  private readonly jwtKwey = '0340ee94830598-958984-09877463bbdfty022-b9b9c33';

  // list of functions for the login verifytoken and
  async Hashpassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hashSync(password, salt);
  }

  // compare password using bcrypt
  comparePassword = (
    password: string,
    hash: string,
  ): Promise<boolean | any> => {
    return bcrypt.compare(password, hash);
  };

  //verifytoken or validating token
  verifyToken = async (token: string) => {
    try {
      return jwt.verify(token, this.jwtKwey);
    } catch (e) {
      throw new UnauthorizedException('the token already expired');
    }
  };

  // for generating the accesstoken i mean the token
  async generateToken(userId: any, email: string) {
    return jwt.sign(
      {
        id: userId,
        email: email,
      },
      this.jwtKwey,
      { expiresIn: '1h' },
    );
  }

  // the func for generating the refresh token
  async GenerateRefreshtoken(id: string , email:string) {
    try {
        // store the refresh token in the database
       
      return jwt.sign({ id: id , email:email }, this.jwtKwey, { expiresIn: '15d' });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  // for generting both access and refresh token
  generateAcccessAndRefreshToken = async (userId: string) => {
    try {
      const userExist = await this.prisma.user.findUnique({
        where: { id: userId },
      });
      if (!userExist) {
        throw new Error('id not found in database');
      }
    } catch (e) {
      throw new Error(e.messgae);
    }
  };

  async login(email: string, password: string) {
    // check if the username or email exist
    try {
      /*
      const user = this.prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      */
      
      const userPass = await this.prisma.user.findFirst({
        where: {
          email:email,
        },
      });

      if(!userPass){
        throw new Error('emails does not exist sign up')
      }

      const comparePass = await this.comparePassword(password , userPass.password)
      if(comparePass){
        // generate a access token and refresh token and store both 
        const token = await this.generateToken(userPass.id , userPass.email)
        const refreshtoken = await this.GenerateRefreshtoken(userPass.id , userPass.email)
        
        return { token , refreshtoken}
      }
    
    } catch (error) {
        throw new Error(error.message)
    }
  }



  // try using it to create a transaction
  async signUp(signInput:Prisma.UserCreateInput ){
  //  const{email , username , password} = signInput;
    try{
      const emailExist = await this.prisma.user.findUnique({
        where:{
          email:signInput.email
        }
      })
      if(!emailExist){
        throw new Error('it cannot exist')
      }
    }catch(e){
      console.error(e.message)
    }
  }
}
