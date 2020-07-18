const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// The Root Page with get request 
app.get('/', (req, res) => {
    res.send('Hello Express');
});


app.listen(port, () => { console.log(`Server started at port ${port}`); });