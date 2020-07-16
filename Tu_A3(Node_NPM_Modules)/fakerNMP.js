const faker = require("faker");


// Random Name 
console.log(faker.name.findName());

// Random Email 
console.log(faker.internet.email());

// Randome Card 
console.log(faker.helpers.createCard());

// Random Product Name and Price
console.log("############################################################");
console.log("Name .......................................Price($)")
for (let index = 0; index < 10; index++) {
    console.log(`${faker.commerce.productName()}..........................${faker.commerce.price()}`);

}
console.log("############################################################");