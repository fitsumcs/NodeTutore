const Note = require('../models/note');

function isLogged(req, res, next) {

    if (req.isAuthenticated()) {
        next();
    } else {
        req.flash('error_msg', "You should login!!");
        res.redirect('/login');
    }
}

function isAuthorized(req, res, next) {

    Note.findOne({ _id: req.params.id }, (err, note) => {
        if (err) {
            console.log(err);
            res.redirect('/allnotes');
        } else {
            if (note.user !== req.user.id) {
                req.flash('error_msg', 'You are not Authorized');
                res.redirect('/allnotes');
            } else {
                next();
            }

        }
    });
}


module.exports = { isLogged, isAuthorized };