import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Bookobj{
    @Field()
    BookID:string;
    @Field()
    BookPrice:number;
}