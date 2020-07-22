const bcrypt = require('bcryptjs');

// Hashing is one way 
async function generatePass() {

    const mypassword = "pass123";
    const hashedpassword = await bcrypt.hash(mypassword, 8);

    console.log(mypassword);
    console.log(hashedpassword);

}
// Hashing is one way 
async function matchPassword(pass) {

    const storedDbpassword = await bcrypt.hash("pass123", 8);

    const isMatch = await bcrypt.compare(pass, storedDbpassword);

    console.log("Pasword Match ? : " + isMatch);

}

generatePass();
matchPass('pass123');