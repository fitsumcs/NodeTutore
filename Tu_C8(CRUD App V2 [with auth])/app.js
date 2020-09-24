const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('hbs');
const body_parser = require('body-parser');
const methodOverride = require('method-override');
const expressSession = require('express-session');
const flash = require('connect-flash');
const Note = require('./models/note');


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
// get all notes 
app.get('/allnotes', (req, res) => {
    Note.find({}).sort({ date: 'desc' }).exec((err, notes) => {
        if (err) {
            return console.log(err);
        }
        res.render('allnotes', { notes });
    });

});
// Notes form
app.get('/notes', (req, res) => {
    res.render("new_notes");
});
app.post('/notes', (req, res) => {

    const errors = [];
    if (!req.body.title) {
        errors.push({ text: "Please Enter Title!!" });
    }
    if (!req.body.description) {
        errors.push({ text: "Please Enter Description!!" });
    }
    if (errors.length > 0) {
        res.render("new_notes", {
            errors,
            title: req.body.title,
            description: req.body.description
        });
    } else {
        const newNote = new Note({
            title: req.body.title,
            description: req.body.description
        });
        newNote.save((err, note) => {
            if (err) {
                return console.log(err);
            }
            req.flash('success_msg', "Note Added !!");
            res.redirect('/allnotes');
        });

    }
});

// edit 
app.get('/notes/:id', (req, res) => {
    Note.findById(req.params.id, (err, note) => {
        if (err) {
            return console.log(err);
        }
        res.render("edit_notes", {
            note
        });
    });

});
//edit
app.put('/notes/:id', (req, res) => {
    const note = {
        title: req.body.title,
        description: req.body.description
    };
    Note.findOneAndUpdate({ _id: req.params.id }, note, (err, note) => {
        if (err) {
            return console.log(err);
        }

        res.redirect('/allnotes');
    });

});
// delete
app.delete('/notes/:id', (req, res) => {

    Note.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            return console.log(err);
        }
        req.flash('success_msg', "Note Deleted !!");
        res.redirect('/allnotes');
    });
});
app.listen(PORT, () => console.log("Server Started!"));