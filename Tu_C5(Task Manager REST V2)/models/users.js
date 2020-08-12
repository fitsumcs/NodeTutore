const mongoose = require('mongoose');
const validaror = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


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

    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});
// sending only public data
userSchema.methods.toJSON = function() {

    const pubdata = this.toObject();

    delete pubdata.password;
    delete pubdata.tokens;

    return pubdata;

};
// Token generation method 
userSchema.methods.generateToken = async function() {

    const token = jwt.sign({ _id: this._id.toString() }, 'mysigniture');

    this.tokens = this.tokens.concat({ token });
    await this.save();

    return token;


};

// Login Method
userSchema.statics.login = async(email, password) => {

    const loginuser = await User.findOne({ email });

    if (!loginuser) {
        throw new Error("Account infromation is Incorrect");
    }

    const isMatch = await bcrypt.compare(password, loginuser.password);

    if (!isMatch) {
        throw new Error("Account infromation is Incorrect");
    }

    return loginuser;

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