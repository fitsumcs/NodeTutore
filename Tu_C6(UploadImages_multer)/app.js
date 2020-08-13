const express = require('express');
const multer = require('multer');

// configuring multer
const upload = multer({
    dest: 'uploads/'
});
const app = express();

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send("Testing Image Upload");
});






app.listen(2000, () => { console.log('Server Started'); })