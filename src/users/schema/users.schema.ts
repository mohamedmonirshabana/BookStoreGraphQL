import * as mongoose from 'mongoose';

// enum roleType{
//     Admin,
//     user
// };

export const userSchema = new mongoose.Schema({
    fullname:{ type:String, required: true },
    email:{type: String, required: true},
    password:{type: String, required: true},
    Role:{type:String, enum:['Admin', 'user'] , required: true, default: 'user' }
});
