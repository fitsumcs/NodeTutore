const express = require('express');
const app = express();
const pagination = require('./paginationMiddleware');
const port = process.env.PORT || 5000;

// users 
const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
    { id: 5, name: "User 5" },
    { id: 6, name: "User 6" },
    { id: 7, name: "User 7" },
    { id: 8, name: "User 8" },
    { id: 9, name: "User 9" },
    { id: 10, name: "User 10" },
    { id: 11, name: "User 11" },
    { id: 12, name: "User 12" },
    { id: 13, name: "User 13" },
    { id: 14, name: "User 14" },
    { id: 15, name: "User 15" },
    { id: 16, name: "User 16" },

];

//get list of users 
app.get('/users', pagination(users), (req, res) => {

    res.json(res.results);
});



app.listen(port, () => console.log("Server Has started at port : " + port));