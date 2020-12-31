import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CART_TABLE_NAME } from '../common/contents';
import { cartInterface } from './interface/cart.interface';
import { cartInput } from './input/Cart.input';
import { CartSchema } from './schema/cart.schema';
import { cartType } from './type/cart.type';
import { wishListService } from '../wishList/wishlist.service';
import { BookService } from '../Books/books.service';

@Injectable()
export class CartService{
    constructor(
        @InjectModel(CART_TABLE_NAME)
        private readonly cartModel: Model<cartInterface>,
        @Inject(forwardRef(() => wishListService))
        private readonly wishService: wishListService,
        @Inject(forwardRef(()=>BookService))
        private readonly books: BookService
    ){}

    async AddtoCart(id: string, visanumber: string, ccv: string){
        const result = await this.wishService.getonewishlist(id);
        const bookprice= await this.books.GetBook(result.bookid);
        
        const bookobj = {
            BookID:result.bookid,
            BookPrice:bookprice.price
        };
        // const Arrob: [] =bookobj;
        // Arrob.push(bookobj);
        const cart= await this.cartModel.create({
            userID:result.userid,
            VisaNumber:visanumber,
            ccv:ccv,
            Booklist: [bookobj],
            totalMoney:bookprice.price
        });

        return cart;
    }
}