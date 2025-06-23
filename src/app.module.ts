import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OkembsModules } from './Modules/OkembModules';
import { CatModules } from './Modules/CatModule';
import { UserModules } from './Modules/UserModules';
import { OkembsService } from './services/OkembsService';

@Module({
  imports: [OkembsModules , CatModules ,   UserModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
