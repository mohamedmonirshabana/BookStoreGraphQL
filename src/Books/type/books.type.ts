import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Auther } from '../../Authers/interface/auther.interface';

@ObjectType()
export class BookType{
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
    autherID:string;
}

// @ObjectType()
// export class BooksAuther{
//     @Field(()=> ID)
//     id?:string;
//     @Field()
//     title:string;
//     @Field()
//     price:number;
//     @Field()
//     summary:string;
//     @Field()
//     demoPrev:string;
//     @Field()
//     autherID:Auther;
// }