import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class userInput{
    @Field()
    fullname: string;
    @Field()
    email:string;
    @Field()
    password:string;
    @Field()
    Role!:string;
}