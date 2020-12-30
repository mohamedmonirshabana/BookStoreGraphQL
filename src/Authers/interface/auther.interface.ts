import { Document } from 'mongoose';

export interface Auther extends Document{
    name:string;
    profilephoto?:string;
    Authersummary:string;
}