// Tesing for core modules
const path = require('path');
const {log} = require('util'); //Destructering 
const v8 = require('v8');
// Tesing for path 
// join dirs  for getting full path 
const dirUploads = path.join(__dirname,"www","files","uploads");

console.log(dirUploads);


// Tesing for util
// Loging ...every log has date 
log(path.basename(__filename));
log(" ^ The name of current file");

// Tesing the v8 module 
log(v8.getHeapStatistics());





