import * as mongoose from 'mongoose';

export const autherSchema = new mongoose.Schema({
    name:{type: String, required: true},
    profilephoto:{type:String},
    Authersummary:{type: String, required: true},
    
});