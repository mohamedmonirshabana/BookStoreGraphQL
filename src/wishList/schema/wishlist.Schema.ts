import * as mongoose from 'mongoose';
import * as tabs from '../../common/contents';

export const wishListSchema = new mongoose.Schema({
    userid:{
        type: mongoose.Types.ObjectId,
        ref: tabs.User_TABLE_NAME,
        required: true
    },
    bookid:{
        type: mongoose.Types.ObjectId,
        ref: tabs.Books_TABLE_NAME,
        required: true
    }

}, { timestamps: true });