import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class userType{
    @Field()
    fullname:string;
    @Field()
    email:string;
    @Field()
    password:string;
    @Field()
    Role?:string;  
}

@ObjectType()
export class usertokenType{
    @Field()
    token: string;
}