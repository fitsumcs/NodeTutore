const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// The Serving Pages from public folder 
const publicdir = path.join(__dirname, '/public');
console.log(publicdir);
app.use(express.static(publicdir));


app.listen(port, () => {
    console.log(
        `
Server started at port ${port}

To Shut down the server you can press ^c`);
});