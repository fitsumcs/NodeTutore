// Require statements 
const express = require('express');

const app = express();





// routes 
app.get('/', (req, res) => {

    res.send("Hi There ...");

});

app.listen(8080, () => console.log(`Server started at http://localhost:8080`));