const express = require('express');
const User = require('../models/users');

// router 
const userrouter = new express.Router();

// Create User routes 
userrouter.post('/users', async(req, res) => {
    // create new user 
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user);


    } catch (error) {
        res.status(400).send(error);
    }

});

// Get Request for all users
userrouter.get('/users', async(req, res) => {

    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }

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
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
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