import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { wishListService } from './wishlist.service';
import { WishlistInput } from './input/wishlist.input';
import { wishlistInterface } from './interface/wishlist.interface';
import { wishListSchema } from './schema/wishlist.Schema';
import {wishlistType } from './type/wishlist.type';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../Auth/auth.guard';


@Resolver()
@UseGuards(AuthGuard)
export class wishlistResolver{
    constructor(
        private readonly wishlistserv: wishListService 
    ){}

    @Mutation(() => wishlistType)
    
    async createwishList(@Args('input')input: WishlistInput): Promise<wishlistInterface>{
        return await this.wishlistserv.addtowish(input);
    }

    @Mutation(() => wishlistType)
    async removewishList(@Args('id')id: string):Promise<wishlistInterface>{
        return await this.wishlistserv.removewish(id);
    }


}