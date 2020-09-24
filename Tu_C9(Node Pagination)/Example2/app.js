const express = require('express');
const mongoose = require('mongoose');

const pagination = require('./paginationMiddleware');
const User = require('./database');


const port = process.env.PORT || 5000;

const app = express();

// mongoose 
mongoose.connect('mongodb://localhost/pagination', { useNewUrlParser: true, useUnifiedTopology: true });
//populate data
const db = mongoose.connection;

db.once('open', async() => {
    if (await User.countDocuments().exec() > 0) {
        return;
    }
    Promise.all([
        User.create({ name: "User 1" }),
        User.create({ name: "User 2" }),
        User.create({ name: "User 3" }),
        User.create({ name: "User 4" }),
        User.create({ name: "User 5" }),
        User.create({ name: "User 6" }),
        User.create({ name: "User 7" }),
        User.create({ name: "User 9" }),
        User.create({ name: "User 10" }),
        User.create({ name: "User 11" }),
        User.create({ name: "User 12" }),
        User.create({ name: "User 13" }),
        User.create({ name: "User 14" }),
    ]).then(() => console.log("Added Data"));
});
// 
//get list of users 
app.get('/users', pagination(User), (req, res) => {

    res.json(res.results);
});



app.listen(port, () => console.log("Server Has started at port : " + port));