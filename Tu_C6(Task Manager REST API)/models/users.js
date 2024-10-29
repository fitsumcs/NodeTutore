const mongoose = require('mongoose');
const validaror = require('validator');

// creating schema 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true

    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validaror.isEmail(value)) {
                throw new Error("Email is Invalid ");
            }

        }

    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        trim: true

    }
});


const User = mongoose.model('Users', userSchema);

module.exports = User;