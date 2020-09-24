const express = require('express');
const path = require('path');
const hbs = require('hbs');
const PORT = process.env.PORT || 3000;

const app = express();

// view 
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/partials'));

app.get('/', (req, res) => {
    res.render("index");
});
app.get('/about', (req, res) => {
    res.render("about");
});

app.listen(PORT, () => console.log("Server Started!"));