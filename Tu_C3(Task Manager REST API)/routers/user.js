const express = require('express');

// router 
const router = new express.Router();
router.get('/test', (req, res) => { res.send('This is new Rout for test from other file..'); });

module.exports = router;