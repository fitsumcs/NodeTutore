const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Render JSON
app.get('/', (req, res) => {
    res.send({
        name: 'Mr X ',
        age: 27,
        gender: 'Male'
    });
});
//array json 
app.get('/array', (req, res) => {
    res.send([{
            name: 'Mr X ',
            age: 27,
            gender: 'Male'
        },
        {
            name: 'Mr Y ',
            age: 30,
            gender: 'FeMale'
        }

    ]);
});



app.listen(port, () => {
    console.log(
        `
Server started at port ${port}

To Shut down the server you can press ^c`);
});