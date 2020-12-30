import { Document } from 'mongoose';

export interface userInterface extends Document{
    fullname:string;
    email:string;
    password:string;
    Role:string;
}

export interface usertoken {
    token: string;
}