const express = require('express');
const Task = require('../models/tasks');
const auth = require('../middleware/auth');

// router 
const taskrouter = new express.Router();


taskrouter.post('/tasks', auth, async(req, res) => {

    // create new task 
    const task = new Task({
        ...req.body,
        creater: req.user._id
    });

    try {

        await task.save();
        res.status(201).send(task);

    } catch (error) {
        res.status(400).send(error);
    }
});


// Get Request for all Tasks
taskrouter.get('/tasks', async(req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);

    } catch (error) {
        res.status(500).send(error);
    }
});

// Get Request for single Task
taskrouter.get('/tasks/:id', async(req, res) => {
    const _id = req.params.id.toString();
    try {
        const task = await Task.findById(_id);
        if (!task) {
            return res.send("User Not Found");
        }
        res.send(task);
    } catch (error) {
        res.status(500).send(error);

    }
});


// Update task resources 
taskrouter.patch('/tasks/:id', async(req, res) => {
    // validation for update query 
    const updates = Object.keys(req.body);
    const allowedOpr = ['completed', 'description'];
    const isAllwed = updates.every((update) => allowedOpr.includes(update));
    if (!isAllwed) {
        return res.status(400).send({ error: 'Invalid Operations!!' });
    }

    try {
        const task = await Task.findById(req.params.id);

        updates.forEach((update) => task[update] = req.body[update]);

        await task.save();

        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        // no user with that id
        if (!task) {
            return res.send("Task Not Found");
        }
        res.send(task);


    } catch (error) {
        res.status(500).send(error);

    }
});

// Removing Task
taskrouter.delete('/tasks/:id', async(req, res) => {

    try {

        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(400).send("User Not Found");

        }
        res.send(user);

    } catch (error) {
        res.status(500).send(error);

    }

});

module.exports = taskrouter;