const User = require('../models/users');
const jwt = require('jsonwebtoken');

const auth = async(req, res, next) => {

    // validat user 
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'mysigniture');
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!user) {
            throw new Error();
        }
        req.token = token;
        req.user = user;
        next();

    } catch (e) {
        res.status(401).send({ error: "You are not loged in " });
    }



};

module.exports = auth;