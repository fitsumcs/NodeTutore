const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const port = process.env.PORT || 3000;

const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// database config 
mongoose.connect('mongodb://localhost/auth_demo1', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});
const User = mongoose.model('User', userSchema);

// end of database 



app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/register', (req, res) => {
    res.render('register');

});
// register 
app.post('/register', (req, res) => {

    bcrypt.hash(req.body.password, 10, function(err, hash) {
        // Store hash in your password DB.
        if (err) {
            res.redirect('/register');

        } else {
            const newUser = new User({
                username: req.body.username,
                password: hash
            });

            newUser.save((err) => {
                if (err) {
                    res.redirect('/register');
                } else {
                    res.render('secret');
                }
            });

        }
    });




});
app.post('/login', (req, res) => {

    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) {
            return res.redirect('/login');

        } else {
            if (user) {
                // Load hash from your password DB.
                bcrypt.compare(req.body.password, user.password, function(err, result) {
                    if (result == true) {
                        res.render('secret');
                    } else {
                        return res.redirect('/login');
                    }
                });
            } else {
                return res.redirect('/login');
            }

        }

    });

});


app.listen(port, () => console.log(`Server Started at port : ${port}`));