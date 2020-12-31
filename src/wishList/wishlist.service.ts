import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { WishList_TABLE_NAME } from '../common/contents';
import { wishlistInterface } from './interface/wishlist.interface';
import { WishlistInput } from './input/wishlist.input';
import { PromiseOrValue } from 'graphql/jsutils/PromiseOrValue';

@Injectable()
export  class wishListService{
    constructor(
        @InjectModel(WishList_TABLE_NAME)
        private readonly withlistModel: Model<wishlistInterface>,
    ){}

    async addtowish(wishinput : WishlistInput): Promise<wishlistInterface>{
        return await this.withlistModel.create(wishinput);
    }

    async removewish(id: string): Promise<wishlistInterface>{
        const wish = await this.withlistModel.findById(id);
        if(!wish)  throw new Error('did not find in list ');
        return await this.withlistModel.findByIdAndRemove(id);
    }

    async getWishlist(id:string):Promise<wishlistInterface>{
        return await this.withlistModel.findById(id);

    }

    async getonewishlist(id:string): Promise<wishlistInterface>{
        return await this.withlistModel.findById(id);
    }
}