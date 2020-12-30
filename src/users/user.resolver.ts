import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { userService } from './user.service';
import { userType, usertokenType } from './type/user.type';
import { userInput } from './input/user.input';
import { loginInput } from './input/login.input';
import { userInterface, usertoken } from './interface/user.interface';
import {  UseGuards } from '@nestjs/common';
import { AuthGuard } from '../Auth/auth.guard';

@Resolver()
export class UserResolver{
    constructor(private readonly userservice: userService){}

    @Mutation(() => userType)
    async signup (@Args('input') input: userInput):Promise<userInterface>{
        return await this.userservice.adduser(input);
    }

    @Mutation(() => usertokenType)
    async login(@Args('input') input: loginInput): Promise<usertoken>{
        return await this.userservice.login(input);
    }

}