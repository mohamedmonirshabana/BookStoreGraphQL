import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class wishlistType{
    @Field(() => ID)
    id?:string;
    @Field()
    userid:string;
    @Field()
    bookid:string;
}