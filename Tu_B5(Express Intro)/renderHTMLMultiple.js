const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// The Root page with get request // we can use also /
app.get('', (req, res) => {
    res.write('<h1>This is the most boring way of serving HTML !!</h1>');
    res.write('<h1>This is the most boring way of serving HTML !!</h1>');
    res.write('<h1>This is the most boring way of serving HTML !!</h1>');
    res.write('<h1>This is the most boring way of serving HTML !!</h1>');

    res.send(); //or use can use res.end();
});



app.listen(port, () => {
    console.log(
        `
Server started at port ${port}

To Shut down the server you can press ^c`);
});