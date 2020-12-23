import { ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import * as tabs  from '../../common/contents'; 

export const booksSchema = new mongoose.Schema({
    title:{type: String, required: true},
    price:{type: Number, required: true},
    summary:{type: String, required: false},
    preview: {type:Number, default: 0},
    demoPrev: {type:String, required: false},
    autherID:{type: mongoose.Types.ObjectId, ref: tabs.Auther_TABLE_NAME}
});