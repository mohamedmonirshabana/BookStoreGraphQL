import { ObjectType, Field, ID, ArrayElement, ObjectTypeOptions  } from '@nestjs/graphql';
import { from } from 'rxjs';
import { Bookobj } from './typeArr';
// @ObjectType
interface bookd{
    BookID:string;
    BookPrice:number;
}


@ObjectType()
export class cartType{
    @Field(() =>ID)
    id?:string;
    @Field()
    userID:string;
    @Field()
    VisaNumber:string;
    @Field()
    ccv:string;
    @Field(() =>  [Bookobj])
    Booklist: [Bookobj];
    @Field()
    totalMoney:number;
}