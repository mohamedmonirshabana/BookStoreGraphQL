import * as mongoose from 'mongoose';

enum roleType{
    Admin,
    user
};

const userSchema = new mongoose.Schema({
    email:{type: String, required: true},
    password:{type: String, required: true},
    Role:{type: roleType, required: true, default: roleType.user}
});
