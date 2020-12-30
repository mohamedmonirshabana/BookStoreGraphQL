import { Resolver, Query, Mutation, Context, Args } from '@nestjs/graphql';
import { AutherService } from './authers.service';
import { AutherInput } from './input/auther.input';
import { AutherType } from './type/authers.type';
import { Auther } from './interface/auther.interface';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../Auth/auth.guard';

@Resolver()
export class autherResolver{
    constructor(
        private readonly autherService: AutherService
    ){}

    @Query(() => [AutherType])
    async getAllAuther():Promise<Auther[]>{
        return await this.autherService.AllAuther();
    }

    @Query(() => AutherType)
    async getAuther(@Args('id')id:string):Promise<Auther>{
        return await this.autherService.AutherbyID(id);
    }

    @Mutation(() => AutherType)
    @UseGuards(AuthGuard)
    async createAuther(@Args('input')input:AutherInput):Promise<Auther>{
        return await this.autherService.AddAuther(input);
    }

    @Mutation(() => AutherType)
    @UseGuards(AuthGuard)
    async updateAuther(@Args('id')id: string, @Args('input')input: AutherInput):Promise<Auther>{
        console.log('id ',id);
        return await this.autherService.EditAuther(id, input);
    }
}