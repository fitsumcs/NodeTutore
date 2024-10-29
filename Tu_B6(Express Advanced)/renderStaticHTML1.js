const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// The Root page with get request // we can use also /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
    // res.send('hi');

});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/about.html'));
    // res.send('hi');

});

console.log(__dirname);

app.listen(port, () => {
    console.log(
        `
Server started at port ${port}

To Shut down the server you can press ^c`);
});