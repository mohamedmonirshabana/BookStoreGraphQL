import { Document } from 'mongoose';
import { Doc } from 'prettier';

export interface wishlistInterface extends Document{
    userid:string;
    bookid:string;
}