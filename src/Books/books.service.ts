import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Auther_TABLE_NAME, Books_TABLE_NAME } from '../common/contents';
import { booksInterface, books } from './interface/books.interface';
import { BookInput } from './input/books.input';

@Injectable()
export class BookService{
    constructor(
        @InjectModel(Books_TABLE_NAME)
        private readonly bookModel: Model<booksInterface>,
    ){}

    async addBook(bookinput: BookInput): Promise<booksInterface>{
        const bookExist = await this.bookModel.findOne({title: bookinput.title});
        if(bookExist){
            throw new Error ('Book Duplicate');
        }
        const resbook = await new this.bookModel(bookinput);
        await resbook.save();
        return resbook;
    }

    async EditBook(bookID: string, bookinput : BookInput): Promise<booksInterface>{
        const bookExist = await this.bookModel.findById(bookID);
        if(!bookExist){
            throw new Error('Book not Exist');
        } 
        const EditBook = await this.bookModel.findByIdAndUpdate(bookID,bookinput);
        return EditBook;
    }

    async GetAllBooks():Promise<booksInterface[]>{
        const result = await this.bookModel.find().populate('autherID').exec();
        // console.log(result);
        return result;
    }

    async GetBook(id: string):Promise<booksInterface>{
        const Book = await this.bookModel.findById(id);
        if(!Book){
            throw new Error('Book not Exist');
        }
        this.increateBook(id);
        const result = await this.bookModel.findById(id).populate('autherID').exec();
        // console.log(result);
        return result;
    }

    async DeleteBook(id: string):Promise<booksInterface>{
        const Book = await this.bookModel.findById(id);
        if(!Book){
            throw new Error('Book Not Found');
        }

        await this.bookModel.findByIdAndDelete(id);
        return Book;

    }

    async increateBook(id: string){
        const book = await this.bookModel.findById(id);
        book.preview++;
        await book.save();
    }


}