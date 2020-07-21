const express = require('express');
require('./DB/mongooseConnections');
const User = require('./models/users');
const Task = require('./models/tasks');
const app = express();
const port = process.env.PORT || 8000;

// setting 
app.use(express.json());
// routes 
app.post('/users', async(req, res) => {
    // create new user 
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user);


    } catch (error) {
        res.status(400).send(error);
    }

});
app.post('/tasks', async(req, res) => {

    // create new user 
    const task = new Task(req.body);

    try {

        await task.save();
        res.status(201).send(task);

    } catch (error) {
        res.status(400).send(error);
    }
});

// Get Request for user
app.get('/users', async(req, res) => {

    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }

});
app.get('/users/:id', async(req, res) => {
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
// Get Request for Task
app.get('/tasks', async(req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);

    } catch (error) {
        res.status(500).send(error);
    }
});
app.get('/tasks/:id', async(req, res) => {
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

app.listen(port, () => console.log("Server Has started"));