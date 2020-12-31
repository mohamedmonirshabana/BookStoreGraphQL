import { Document } from 'mongoose';


export interface cartInterface extends Document{
    userID:string;
    VisaNumber: string;
    ccv: string;
    Booklist: [{
        BookID: string,
        BookPrice: number
    }];
    totalMoney: number;
}