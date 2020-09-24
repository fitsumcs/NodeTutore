const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('hbs');
const bodyparser = require('body-parser');
const Note = require('./models/note');


const PORT = process.env.PORT || 3000;

const app = express();

//database 
mongoose.connect('mongodb://localhost/note_taker', { useUnifiedTopology: true, useNewUrlParser: true });

// middleware config 
app.use(bodyparser.urlencoded({ extended: false }));
// view 
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.get('/', (req, res) => {
    res.render("index");
});
app.get('/about', (req, res) => {
    res.render("about");
});

// Notes form
app.get('/notes', (req, res) => {
    res.render("new_notes");
});
app.post('/notes', (req, res) => {

    const errors = [];
    if (!req.body.title) {
        errors.push({ text: "Pleas Enter Title!!" });
    }
    if (!req.body.description) {
        errors.push({ text: "Pleas Enter Description!!" });
    }
    if (errors.length > 0) {
        res.render("new_notes", {
            errors,
            title: req.body.title,
            description: req.body.description
        });
    } else {
        res.redirect('/');
    }


});

app.listen(PORT, () => console.log("Server Started!"));