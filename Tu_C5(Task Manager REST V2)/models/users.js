const mongoose = require('mongoose');
const validaror = require('validator');
const bcrypt = require('bcryptjs');

// creating schema 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true

    },
    email: {
        type: String,
        unique: true,
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

// Login Method
userSchema.statics.login = async(email, password) => {

    console.log("Tesing Loging");

};
// hashing
userSchema.pre('save', async function(next) {

    // do staff 

    if (this.isModified('password')) {

        this.password = await bcrypt.hash(this.password, 8);

    }

    next();

});

const User = mongoose.model('Users', userSchema);



module.exports = User;