const mongoose = require('mongoose');

// Define the user schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Define and export the user model
module.exports = mongoose.model('User', UserSchema);
