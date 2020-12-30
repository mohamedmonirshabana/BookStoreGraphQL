import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schema/users.schema';
import { userService } from './user.service';
import { User_TABLE_NAME } from '../common/contents';
import { PasswordHasherService } from '../Auth/password-hasher/password-hasher.service';
import { jwtConstants } from '../common/jwt.constants';
import { JwtModule } from '@nestjs/jwt';
import { UserResolver } from "./user.resolver";

@Module({
    imports:[
        MongooseModule.forFeature([{name: User_TABLE_NAME, schema: userSchema}]),
        JwtModule.register({secret: jwtConstants.scret})
    ],
    providers:[ userService, PasswordHasherService, UserResolver ]
})
export class UserModule{}