import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AutherInput{
    @Field()
    name:string;
    @Field()
    profilephoto:string;
    @Field()
    Authersummary:string;
}
