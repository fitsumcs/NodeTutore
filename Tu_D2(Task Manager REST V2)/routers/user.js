const express = require('express');
const User = require('../models/users');
const auth = require('../middleware/auth');
const multer = require('multer');
// const sharp = require('sharp');

// config multer folder 
const upload = multer({

    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|PNG)$/)) {
            return cb(new Error('Make sure it is Image'));
        }
        cb(undefined, true);

    }
});

// router 
const userrouter = new express.Router();

// Create User routes 
userrouter.post('/users', async(req, res) => {
    // create new user 
    const user = new User(req.body);
    try {
        await user.save();
        const token = await user.generateToken();
        res.status(201).send({ user, token });


    } catch (error) {
        res.status(400).send(error);
    }

});
// Login routes 
userrouter.post('/users/login', async(req, res) => {

    try {
        const user = await User.login(req.body.email, req.body.password);

        const token = await user.generateToken();

        res.send({ user, token });

    } catch (error) {
        res.status(400).send(error);
    }

});
// logout 
userrouter.post('/users/logout', auth, async(req, res) => {

    try {
        req.user.tokens = req.user.tokens.filter((token) => {

            return token.token !== req.token;

        });
        await req.user.save();

        res.send();

    } catch (error) {
        res.status(500).send();
    }

});
// logout 
userrouter.post('/users/logoutAll', auth, async(req, res) => {

    try {
        req.user.tokens = [];
        await req.user.save();

        res.send();

    } catch (error) {
        res.status(500).send();
    }

});
// Get Request for all users ==> changed to myprofile
userrouter.get('/users/me', auth, async(req, res) => {

    // try {
    //     const users = await User.find({});
    //     res.send(users);
    // } catch (error) {
    //     res.status(500).send(error);
    // }
    res.send(req.user);

});

// Get Request for single users ==> No Longer Required
// userrouter.get('/users/:id', async(req, res) => {
//     const _id = req.params.id.toString();
//     try {
//         constuser = await User.findById(_id);
//         if (!user) {
//             return res.send("User Not Found");
//         }
//         res.send(user);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// Update user resources 
userrouter.patch('/users/me', auth, async(req, res) => {
    // validation for update query 
    const updates = Object.keys(req.body);
    const allowedOpr = ['name', 'email', 'password'];
    const isAllwed = updates.every((update) => allowedOpr.includes(update));
    if (!isAllwed) {
        return res.status(400).send({ error: 'Invalid Operations!!' });
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update]);
        await req.user.save();
        res.send(req.user);


    } catch (error) {
        res.status(500).send("error");

    }
});

// Removing User => change of URL since the id is not required
userrouter.delete('/users/me', auth, async(req, res) => {

    try {

        await req.user.remove();
        res.send(req.user);

    } catch (error) {
        res.status(500).send(error);

    }

});

// adding profile picture for user 
userrouter.post('/users/me/avatar', auth, upload.single('avatar'), async(req, res) => {
    // const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer();
    req.user.avatar = req.file.buffer;
    await req.user.save();
    res.send();
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message });
});
//remove profile pic 
userrouter.delete('/users/me/avatar', auth, async(req, res) => {
    req.user.avatar = undefined;
    await req.user.save();
    res.send();

});
// view profile image 
userrouter.get('/users/:id/avatar', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user || !user.avatar) {
            throw new Error();
        }
        res.set('Content-Type', 'image/jpg');
        res.send(user.avatar);
    } catch (error) {
        res.status(404).send(error);

    }
});
module.exports = userrouter;