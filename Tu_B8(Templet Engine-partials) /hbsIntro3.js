const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
hbs.registerPartials(path.join(__dirname, '/partials'));

// The Root page hbs
app.get('/', (req, res) => {
    res.render('index');


});


app.listen(port, () => {
    console.log(
        `
Server started at port ${port}

To Shut down the server you can press ^c`);
});