import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class userType{
    @Field()
    email:string;
    @Field()
    password:string;
    
}