import * as mongoose from 'mongoose';
import { User_TABLE_NAME, Books_TABLE_NAME } from '../../common/contents';


const BookListSchema =new mongoose.Schema({
    BookID:{
        type:String,
        required: true
    },
    BookPrice:{
        type:Number,
        required:true
    }
});


export const CartSchema = new mongoose.Schema({
    userID:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: User_TABLE_NAME
    },
    VisaNumber:{
        type: String,
        maxlength:14,
        required:true
    },
    ccv:{
        type:String,
        length: 4,
        required: true
    },
    Booklist:{
        type: [BookListSchema],
        required: true,
    },
    totalMoney:{
        type:Number,
        required: true
    }

});