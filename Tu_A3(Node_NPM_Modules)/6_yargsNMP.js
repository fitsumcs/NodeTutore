const argv = require("yargs");

//Run the program like this 
// To get the argument from terminal 
console.log(`
To get the argument from terminal 
// 1. cd to this folder 
// 2. node yargsNMP.js  add --title="Somthing" --body="Somthing"

`);
// 1. cd to this folder 
// 2. node yargsNMP.js  add --title="Somthing" --body="Somthing" 
console.log(argv.argv);