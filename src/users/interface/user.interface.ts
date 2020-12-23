import { Document } from 'mongoose';

export interface userInterface extends Document{
    email:string;
    password:string;
    Role:string;
}

export interface usertoken {
    token: string;
}