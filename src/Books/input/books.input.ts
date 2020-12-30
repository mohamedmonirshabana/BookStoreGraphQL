import { InputType,Field, ID } from '@nestjs/graphql';
import { Auther } from '../../Authers/interface/auther.interface';

@InputType()
export class BookInput{
    // @Field(()=> ID)
    // id?:string;
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