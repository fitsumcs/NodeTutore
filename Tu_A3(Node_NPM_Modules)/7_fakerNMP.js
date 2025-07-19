const { faker } = require("@faker-js/faker");


// Random Name 
console.log(faker.person.fullName());

// Random Email 
console.log(faker.internet.email());

// Random Credit Card 
console.log(faker.finance.creditCardNumber());

// Random Product Name and Price
console.log("############################################################");
console.log("Name .......................................Price($)")
for (let index = 0; index < 10; index++) {
    console.log(`${faker.commerce.productName()}..........................${faker.commerce.price()}`);

}
console.log("############################################################");