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
taskrouter.get('/tasks', auth, async(req, res) => {
    try {
        // const tasks = await Task.find({ creater: req.user._id });

        // other way doing it ..:)

        match = {};
        if (req.query.completed) {
            match.completed = req.query.completed === 'true';
        }

        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit)
            }
        }).execPopulate();
        res.send(req.user.tasks);

        // res.send(tasks);


    } catch (error) {
        res.status(500).send(error);
    }
});

// Get Request for single Task
taskrouter.get('/tasks/:id', auth, async(req, res) => {
    const _id = req.params.id.toString();
    try {
        // const task = await Task.findById(_id);
        const task = await Task.findOne({ _id, creater: req.user._id });
        if (!task) {
            return res.send("Task Not Found");
        }
        res.send(task);
    } catch (error) {
        res.status(500).send(error);

    }
});


// Update task resources 
taskrouter.patch('/tasks/:id', auth, async(req, res) => {
    // validation for update query 
    const updates = Object.keys(req.body);
    const allowedOpr = ['completed', 'description'];
    const isAllwed = updates.every((update) => allowedOpr.includes(update));
    if (!isAllwed) {
        return res.status(400).send({ error: 'Invalid Operations!!' });
    }

    try {
        const task = await Task.findOne({ _id: req.params.id, creater: req.user._id });

        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        // no user with that id
        if (!task) {
            return res.send("Task Not Found");
        }

        updates.forEach((update) => task[update] = req.body[update]);
        await task.save();

        res.send(task);


    } catch (error) {
        res.status(500).send(error);

    }
});

// Removing Task
taskrouter.delete('/tasks/:id', auth, async(req, res) => {

    try {

        const task = await Task.findOneAndDelete({ _id: req.params.id, creater: req.user._id });
        if (!task) {
            return res.status(400).send("Task Not Found");

        }
        res.send(task);

    } catch (error) {
        res.status(500).send(error);

    }

});

module.exports = taskrouter;