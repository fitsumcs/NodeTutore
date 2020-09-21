const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocal = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost/auth_demo', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.set('view engine', 'ejs');

// middleware 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressSession({
    secret: "This is Secret Code",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//login middleware
function isLogged(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        console.log("Not Authenticated");
        res.redirect('/login');
    }

}

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/secret', isLogged, (req, res) => {
    res.render('secret');
});
//register
app.get('/register', (req, res) => {
    res.render('register');
});
app.post('/register', (req, res) => {

    User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.redirect('/register');

        }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/secret');
        });

    });
});
//login
app.get('/login', (req, res) => {
    res.render('login');
});
app.post('/login', passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
}), (req, res) => {

});

//logout
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});


app.listen(3000, () => { console.log("Server Started!"); });