import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User_TABLE_NAME } from '../common/contents';
import { userInterface } from './interface/user.interface';

@Injectable()
export class userService{
    constructor( @InjectModel(User_TABLE_NAME) private userModel: Model<userInterface> ){}

    
}