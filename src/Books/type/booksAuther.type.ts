import { ObjectType, Field, ID } from '@nestjs/graphql';

import { AutherType } from '../../Authers/type/authers.type';

@ObjectType()
export class BooksAuther{
    @Field(()=> ID)
    id?:string;
    @Field()
    title:string;
    @Field()
    price:number;
    @Field()
    summary:string;
    @Field()
    demoPrev:string;
    @Field()
    autherID:AutherType;
}