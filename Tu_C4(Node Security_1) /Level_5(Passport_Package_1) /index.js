const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express_session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const port = process.env.PORT || 3000;

const app = express();


// parse application/x-www-form-urlencoded

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

// Passport config
app.use(express_session({
    secret: "thisissecret",
    resave: false,
    saveUninitialized: false

}));

app.use(passport.initialize());
app.use(passport.session());


// End of passport
// database config 
mongoose.connect('mongodb://localhost/auth_demo1', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// end of database 




app.get('/', (req, res) => {
    res.render('index');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/register', (req, res) => {
    res.render('register');

});
app.get('/secret', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('secret');
    } else {
        res.redirect('/login');

    }



});
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});
// register 
app.post('/register', (req, res) => {

    User.register({ username: req.body.username }, req.body.password, (err, user) => {
        if (err) {
            res.redirect('/register');
        } else {
            passport.authenticate('local')(req, res, () => {
                res.redirect('/secret');
            });
        }
    });





});
app.post('/login', (req, res) => {

    const user = new User({ username: req.body.username, password: req.body.password });
    req.login(user, (err) => {
        if (err) {
            res.redirect('/login');
        } else {
            passport.authenticate('local')(req, res, () => {
                res.redirect('/secret');
            });

        }
    });


});


app.listen(port, () => console.log(`Server Started at port : ${port}`));