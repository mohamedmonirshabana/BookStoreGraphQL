import { InputType, Field, ID } from '@nestjs/graphql';


@InputType()
export class WishlistInput{
    @Field()
    userid:string;
    @Field()
    bookid:string;
}