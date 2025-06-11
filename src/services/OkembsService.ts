import { Injectable } from "@nestjs/common";
import { Okembs } from "src/Interace/Cats";

export const data:any[] = [
    {
        id:1,
        name: 'chevio',
        tall:true
    },
    {
        id:2,
        name: 'kimpo',
        tall:false
    },
    {
        id:3,
        name: 'cache',
        tall:true
    }
]
@Injectable()
export class OkembsService{
    public Okembs: any[] = []
    public Okembsdata:any = data

    getOkembs(val:Okembs){
        this.Okembs.push(val) 
    }

    getAllOkembs():string[]{
        return this.Okembs
    }

    getMinOkembs(){
        return this.Okembsdata
    }
}