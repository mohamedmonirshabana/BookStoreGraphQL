import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CartService } from './cart.service';
import { cartInput } from './input/Cart.input';
import { cartInterface } from './interface/cart.interface';
import { CartSchema } from './schema/cart.schema';
import { cartType } from './type/cart.type';
import { AuthGuard } from '../Auth/auth.guard';

@Resolver()
export class cartResolver{
    constructor(
        private readonly cartservice: CartService
    ){}

    @Mutation(() => cartType)
    async AddtoCart(@Args('id')id:string, @Args('visa')visa:string, @Args('CCV')CCV:string):Promise<cartInterface>{
        return await this.cartservice.AddtoCart(id,visa,CCV);
    }
}