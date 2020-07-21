const express = require('express');
require('./DB/mongooseConnections');
const User = require('./models/users');
const Task = require('./models/tasks');
const app = express();
const port = process.env.PORT || 8000;

// setting 
app.use(express.json());
// routes 
app.post('/users', (req, res) => {

    // create new user 
    const user = new User(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    });
});
app.post('/tasks', (req, res) => {

    // create new user 
    const task = new Task(req.body);
    task.save().then(() => {
        res.status(201).send(task);
    }).catch((err) => {
        res.status(400).send(err);
    });
});

// Get Request for user
app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch((err) => { res.status(500).send(err); });
});
app.get('/users/:id', (req, res) => {
    const _id = req.params.id.toString();
    User.findById(_id).then((user) => {
        if (!user) {
            return res.send("User Not Found");
        }
        res.send(user);
    }).catch((err) => { res.status(500).send(err); });
});
// Get Request for Task
app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks);
    }).catch((err) => { res.status(500).send(err); });
});
app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id.toString();
    Task.findById(_id).then((task) => {
        if (!task) {
            return res.send("User Not Found");
        }
        res.send(task);
    }).catch((err) => { res.status(500).send(err); });
});

app.listen(port, () => console.log("Server Has started"));