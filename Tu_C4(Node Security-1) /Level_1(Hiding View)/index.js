const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

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

    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    });

    newUser.save((err) => {
        if (err) {
            res.redirect('/register');
        } else {
            res.render('secret');
        }
    });
});
app.post('/login', (req, res) => {

    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) {
            return res.redirect('/login');

        } else {
            if (user) {
                if (req.body.username === user.username) {
                    res.render('secret');

                } else {
                    return res.redirect('/login');

                }
            } else {
                return res.redirect('/login');
            }

        }

    });

});


app.listen(port, () => console.log(`Server Started at port : ${port}`));