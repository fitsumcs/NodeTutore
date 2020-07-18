const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// The Root page with get request // we can use also /
app.get('', (req, res) => {
    res.send('Hello Express !!');
});
// help about 
app.get('/about', (req, res) => {
    res.send('This is About page :)');
});
// help route 
app.get('/help', (req, res) => {
    res.send('This is Help page :)');
});


app.listen(port, () => {
    console.log(
        `
Server started at port ${port}

To Shut down the server you can press ^c`);
});