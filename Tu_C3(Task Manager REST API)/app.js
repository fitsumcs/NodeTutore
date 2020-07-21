const express = require('express');
require('./DB/mongooseConnections');
const User = require('./models/users');
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
        console.log(user);
    }).catch((err) => {
        res.status(400).send(err);
    });
});

app.listen(port, () => console.log("Server Has started"));