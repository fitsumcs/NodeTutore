// Requiring custom module
// const name = require("./myModule");

// console.log(name);

// const counter = require("./myModule");
// Destructuring 
const {inc,dec,getCount} = require("./myModule");
// counter 
inc();
inc();
inc();
dec();

console.log(getCount());
