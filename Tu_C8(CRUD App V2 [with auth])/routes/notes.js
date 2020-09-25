const express = require('express');
const Note = require('../models/note');
const isLogged = require('../middleware');
const router = express.Router();


// get all notes 
router.get('/allnotes', (req, res) => {
    Note.find({}).sort({ date: 'desc' }).exec((err, notes) => {
        if (err) {
            return console.log(err);
        }
        res.render('allnotes', { notes });
    });

});
// Notes form
router.get('/notes', isLogged, (req, res) => {
    res.render("new_notes");
});
router.post('/notes', isLogged, (req, res) => {

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
router.get('/notes/:id', isLogged, (req, res) => {
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
router.put('/notes/:id', isLogged, (req, res) => {
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
router.delete('/notes/:id', isLogged, (req, res) => {

    Note.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            return console.log(err);
        }
        req.flash('success_msg', "Note Deleted !!");
        res.redirect('/allnotes');
    });
});


module.exports = router;