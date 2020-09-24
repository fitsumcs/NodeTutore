const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../models/user');

// get login form 
router.get('/login', (req, res) => {
    res.render('login');
});
// get register form
router.get('/register', (req, res) => {
    res.render('register');
});
//  post register form
router.post('/register', (req, res) => {
    const errors = [];
    if (req.body.password !== req.body.password2) {
        errors.push({ text: "Password Does Not match!!" });
    }
    if (errors.length > 0) {
        res.render('register', {
            errors,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            password2: req.body.password2,

        });
    } else {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                });
                newUser.save((err, user) => {
                    if (err) {
                        return console.log(err);
                    }
                    req.flash('success_msg', "Registered Successfully u can Login !!");
                    res.redirect('/login');
                });
            });
        });
    }

});



module.exports = router;