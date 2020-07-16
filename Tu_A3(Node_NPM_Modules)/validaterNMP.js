const validator = require("validator");

// Tesing validation of email 

console.log(`Correct mail ?: ${validator.isEmail('somemail@gmail.com')}`);
console.log(`Correct mail ?: ${validator.isEmail('somemailgmail.com')}`);


// Tesing validation of URL

console.log(`Correct URL?: ${validator.isURL('http://google.com')}`);
console.log(`Correct URL ?: ${validator.isEmail('somemaiail.com')}`);