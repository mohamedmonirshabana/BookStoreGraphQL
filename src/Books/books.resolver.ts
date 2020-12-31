import { Resolver, Query, Mutation, Context, Args } from '@nestjs/graphql';
import { BookService } from './books.service';
import { BookInput } from './input/books.input';
import { BookType, } from './type/books.type';
import { BooksAuther } from './type/booksAuther.type';
import { booksInterface, books } from './interface/books.interface';
import { UseGuards } from '@nestjs/common';
import { AdminGuard } from '../Auth/admin.guard';

@Resolver()
export class BooksResolver{
    constructor(
        private readonly bookserv: BookService
    ){}
    
    @Query(() => BooksAuther)
    async getBook(@Args('id')id: string): Promise<booksInterface>{
        return await this.bookserv.GetBook(id);
    }

    @Query(() => [BooksAuther])
    async AllBooks():Promise<booksInterface[]>{
        return await this.bookserv.GetAllBooks();
    }

    @Mutation(() => BooksAuther)
    @UseGuards(AdminGuard)
    async createBook(@Args('input')input: BookInput): Promise<booksInterface>{
        return await this.bookserv.addBook(input);
    }

    @Mutation(() => BooksAuther)
    @UseGuards(AdminGuard)
    async updateBook(@Args('id')id: string, @Args('input')input: BookInput): Promise<booksInterface>{
        return await this.bookserv.EditBook(id,input);
    }

    @Mutation(() => BooksAuther)
    @UseGuards(AdminGuard)
    async deleteBook(@Args('id')id: string) :Promise<booksInterface> {
        return await this.bookserv.DeleteBook(id);
    }


    
    
}