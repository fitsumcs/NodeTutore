// Require statements 
const path = require('path');
const express = require('express');
const dateFormat = require('./utils/dateFormater');



const app = express();

// configuration 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));



// routes 
app.get('/', (req, res) => {

    let day = dateFormat();
    res.render('home', { day });

});
app.post('/', (req, res) => {

    let day = dateFormat();
    res.render('home', { day });

});

app.listen(8080, () => console.log(`Server started at http://localhost:8080`));