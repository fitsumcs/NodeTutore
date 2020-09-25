const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

function passportConfig() {

    passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {

        User.findOne({ email: email }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: 'Incorrect username or password!' });
            }
            // match password 
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    return done(err);
                }
                if (result) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Incorrect username or password!' });
                }
            });


        });


    }));
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
}


module.exports = passportConfig;