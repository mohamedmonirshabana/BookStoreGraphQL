import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { Auther_TABLE_NAME } from '../common/contents';
import { autherResolver } from "./auther.resolver";
import { AutherService } from "./authers.service";
import { autherSchema } from './schema/authers.schema';

@Module({
    imports:[ 
        MongooseModule.forFeature([{name: Auther_TABLE_NAME, schema:autherSchema}]),
     ],
    providers:[AutherService, autherResolver ]
})
export class AutherModule{}