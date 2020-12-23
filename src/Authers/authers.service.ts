import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auther_TABLE_NAME } from '../common/contents';
import { Auther } from './interface/auther.interface';
import { AutherInput } from './input/auther.input';
// import { PromiseOrValue } from 'graphql/jsutils/PromiseOrValue';

@Injectable()
export class AutherService{
    constructor(
        @InjectModel(Auther_TABLE_NAME)
        private readonly autherModel: Model<Auther>
    ){}

    async AddAuther(autherinput: AutherInput): Promise<Auther>{
        const auther = await this.autherModel.findOne({name: autherinput.name});
        if(auther){
            throw new Error ('Auther is Exist');
        }
        const result = await new this.autherModel(autherinput);
        await result.save();
        return result;
    }

    async AllAuther(): Promise<Auther[]>{
        return await this.autherModel.find();
    }

    async AutherbyID(id: string): Promise<Auther>{
        return await this.autherModel.findById(id);
    }

    async EditAuther(id: string, autherinput: AutherInput):Promise<Auther>{
        const autherExist = await this.autherModel.findById(id);
        if(!autherExist){
            throw new Error("user id not Exist");
        }
        const upAuther = await this.autherModel.findByIdAndUpdate(id, autherinput);
        return upAuther;
    }
}