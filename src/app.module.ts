import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { AutherModule } from './Authers/authers..module';
import { BooksModule } from './Books/books.module';
import { UserModule } from './users/user.module';
import { wishLitModule } from './wishList/wishlist.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/BookStore'),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    AutherModule,
    BooksModule,
    UserModule,
    wishLitModule
   ],
  controllers: [],
  providers: [],
})
export class AppModule {}
