// Working with Node file system 
const fs = require("fs");
const path = require("path");


const t = path.join(__dirname,"files");
// read contenet of dir 
// Sync or Async 
// console.log("Started Reading files ...")
// const files = fs.readdirSync(t);  
// console.log("completed reading ..")

// console.log(files);

// async 
console.log("Started Reading files ...")
const files = fs.readdir(t,(err,files)=>{
    console.log("completed reading ..");
    
    console.log(files);
});  
console.log("On Progress...")

