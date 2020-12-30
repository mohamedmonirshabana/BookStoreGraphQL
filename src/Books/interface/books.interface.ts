import { Document } from 'mongoose';
import { Auther } from '../../Authers/interface/auther.interface';

export interface booksInterface extends Document{
    title:string;
    price:number;
    summary:string;
    preview: number;
    demoPrev: string;
    autherID: string;
} 

export interface books{
    title:string;
    price:number;
    summary:string;
    preview: number;
    demoPrev: string;
    autherID: Auther;
}