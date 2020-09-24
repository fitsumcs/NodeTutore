const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('hbs');
const body_parser = require('body-parser');
const methodOverride = require('method-override');
const expressSession = require('express-session');
const flash = require('connect-flash');


// routes
const noteRouter = require('./routes/notes');
const authRouter = require('./routes/auth');

const PORT = process.env.PORT || 3000;

const app = express();

//database 
mongoose.connect('mongodb://localhost/note_taker', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

// middleware config 
app.use(body_parser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
// session 
app.use(expressSession({
    secret: "this_is_secret",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());

// global variables 
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// view 
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.get('/', (req, res) => {
    res.render("index");
});
app.get('/about', (req, res) => {
    res.render("about");
});

app.use(noteRouter);
app.use(authRouter);
app.listen(PORT, () => console.log("Server Started!"));