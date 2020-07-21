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

// Get Request 
app.get('/users', (rer, res) => {
    User.find({}).then((users) => {
        res.status(200).send(users);
    });
});

app.listen(port, () => console.log("Server Has started"));