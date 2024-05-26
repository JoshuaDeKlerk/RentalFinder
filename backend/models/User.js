import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    idOrDriversLicense: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
}, { collection: 'users' });

const User = model('User', UserSchema);
export default User;



