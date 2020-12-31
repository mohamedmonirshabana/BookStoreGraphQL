import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {CART_TABLE_NAME} from '../common/contents';
import { CartSchema } from './schema/cart.schema';
// import { wishListService } from '../wishList/wishlist.service';
// import { BookService } from '../Books/books.service';
import { cartResolver }  from './cart.resolver';
import { CartService } from './cart.service';
import { BooksModule } from 'src/Books/books.module';
import { wishLitModule } from 'src/wishList/wishlist.module';

@Module({
    imports:[
        MongooseModule.forFeature([{name:CART_TABLE_NAME, schema: CartSchema}]),
        forwardRef(()=>wishLitModule),
        forwardRef(()=>BooksModule)
    ],
    providers:[ CartService, cartResolver ]
})
export class CartModule{}