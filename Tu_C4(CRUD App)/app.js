const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('hbs');
const body_parser = require('body-parser');
const Note = require('./models/note');


const PORT = process.env.PORT || 3000;

const app = express();

//database 
mongoose.connect('mongodb://localhost/note_taker', { useUnifiedTopology: true, useNewUrlParser: true });

// middleware config 
app.use(body_parser.urlencoded({ extended: false }));
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
    Note.find({}, (err, notes) => {
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
            res.redirect('/allnotes');
        });

    }


});

app.listen(PORT, () => console.log("Server Started!"));