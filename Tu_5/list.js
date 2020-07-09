// Working with Node file system 
const fs = require("fs");
const path = require("path");


const t = path.join(__dirname,"files");
// read contenet of dir 
// Sync or Async 
console.log("Started Reading files ...")
const files = fs.readdirSync(t);  
console.log("completed reading ..")
// async 


console.log(files);

