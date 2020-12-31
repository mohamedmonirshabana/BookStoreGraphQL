import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { Bookobj } from '../type/typeArr';

@InputType()
export class cartInput{
    @Field()
    userID:string;
    @Field()
    VisaNumber:string;
    @Field()
    ccv:string;
    @Field(() => [Bookobj])
    Booklist:[Bookobj];
    @Field()
    totalMoney:number;
}