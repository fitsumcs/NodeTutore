function checkLogged(req, res, next) {

    if (req.isAuthenticated()) {
        next();
    } else {
        req.flash('error_msg', "You should login!!");
        res.redirect('/login');
    }



}


module.exports = checkLogged;