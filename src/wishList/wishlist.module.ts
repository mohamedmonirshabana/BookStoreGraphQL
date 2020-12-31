import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { cloneSchema } from 'graphql-tools';
import { WishList_TABLE_NAME } from '../common/contents';
import { wishListSchema } from './schema/wishlist.Schema';
import { wishlistResolver } from './wishlist.resolver';
import { wishListService } from './wishlist.service';

@Module({
    imports:[
        MongooseModule.forFeature([{name:WishList_TABLE_NAME, schema:wishListSchema}]),
    ],
    providers:[ wishListService, wishlistResolver ],
    exports:[wishListService]
})
export class wishLitModule{}