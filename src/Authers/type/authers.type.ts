import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class AutherType{
    @Field(() => ID)
    id!:string;
    @Field()
    name:string;
    @Field()
    profilephoto?:string;
    @Field()
    Authersummary:string;
}