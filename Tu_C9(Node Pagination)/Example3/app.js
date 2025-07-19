const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

const pagination = require('./paginationMiddleware');
const User = require('./users');

const port = process.env.PORT || 5000;

const app = express();

app.set('view engine', 'ejs');

// mongoose 
mongoose.connect('mongodb://localhost/pagination');



// 
//get list of users 
app.get('/:page', async(req, res, next) => {

    const resPerPage = 4; // results per page
    const page = req.params.page || 1; // Page
    try {


        // Find Demanded Products - Skipping page values, limit results per page
        const foundUsers = await User.find()
            .skip((resPerPage * page) - resPerPage)
            .limit(resPerPage);
        // Count how many products were found
        const numOfUsers = await User.countDocuments();
        // Renders The Page
        res.render('index', {
            users: foundUsers,
            currentPage: page,
            pages: Math.ceil(numOfUsers / resPerPage),
            numOfResults: numOfUsers
        });

    } catch (err) {
        throw new Error(err);
    }
});



app.listen(port, () => console.log("Server Has started at port : " + port));