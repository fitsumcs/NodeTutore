const express = require('express');
const User = require('../models/users');
const auth = require('../middleware/auth');

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

// Get Request for single users
userrouter.get('/users/:id', async(req, res) => {
    const _id = req.params.id.toString();
    try {
        constuser = await User.findById(_id);
        if (!user) {
            return res.send("User Not Found");
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update user resources 
userrouter.patch('/users/:id', async(req, res) => {
    // validation for update query 
    const updates = Object.keys(req.body);
    const allowedOpr = ['name', 'email', 'password'];
    const isAllwed = updates.every((update) => allowedOpr.includes(update));
    if (!isAllwed) {
        return res.status(400).send({ error: 'Invalid Operations!!' });
    }

    try {

        const user = await User.findById(req.params.id);

        updates.forEach((update) => user[update] = req.body[update]);

        await user.save();

        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        // no user with that id
        if (!user) {
            return res.send("User Not Found");
        }
        res.send(user);


    } catch (error) {
        res.status(500).send(error);

    }
});

// Removing User
userrouter.delete('/tasks/:id', async(req, res) => {

    try {

        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(400).send("Task Not Found");

        }
        res.send(task);

    } catch (error) {
        res.status(500).send(error);

    }

});

module.exports = userrouter;