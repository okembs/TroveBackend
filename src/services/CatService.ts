import { Injectable } from "@nestjs/common";
import { Cats } from "src/Interace/Cats";

@Injectable()
    export class CatService{
        private readonly cats: Cats[] = []

        create(cat:Cats){
            this.cats.push(cat)
        }

        findAll(): Cats[]{
            return this.cats
        }
    }
