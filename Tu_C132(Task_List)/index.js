// Require statements 
const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const dateFormat = require('./utils/dateFormater');
const taskUtil = require('./utils/taskList');



const app = express();

// configuration 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

// routes 
app.get('/', (req, res) => {

    let day = dateFormat();
    let tasks = taskUtil.viewTaskList();
    res.render('home', { day, tasks });

});
app.post('/', (req, res) => {

    taskUtil.addTask(req.body.newItem);
    res.redirect('/');

});

app.listen(8080, () => console.log(`Server started at http://localhost:8080`));