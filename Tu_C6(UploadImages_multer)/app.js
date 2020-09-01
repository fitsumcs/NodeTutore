const express = require('express');
const multer = require('multer');

// configuring multer
const upload = multer({
    dest: 'uploads/',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.endsWith('.pdf')) {
            return cb(new Error('Make sure it is pdf'));
        }

        cb(undefined, true);

    }
});
const app = express();

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send("Testing Image Upload");
});






app.listen(2000, () => { console.log('Server Started'); });