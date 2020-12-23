import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { Books_TABLE_NAME } from '../common/contents';
import { BooksResolver } from "./books.resolver";
import { BookService } from "./books.service";
import { booksSchema } from "./schema/books.schema";

@Module({
    imports:[
        MongooseModule.forFeature([{name: Books_TABLE_NAME, schema:booksSchema}])
    ],
    providers:[BookService, BooksResolver]
})
export class BooksModule{}