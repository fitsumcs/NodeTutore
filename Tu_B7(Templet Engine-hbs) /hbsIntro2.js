const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

// The Root page hbs and passing vlaue ..
app.get('/', (req, res) => {
    res.render('index2', { message: "This is from Code .." });


});


app.listen(port, () => {
    console.log(
        `
Server started at port ${port}

To Shut down the server you can press ^c`);
});