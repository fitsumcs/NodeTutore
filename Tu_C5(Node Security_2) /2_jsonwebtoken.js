const jwt = require('jsonwebtoken');

async function testJsonwebToken() {

    // create token 
    const token = jwt.sign({ _id: 'ancd123' }, 'thisismycat', { expiresIn: '4 days' });
    console.log(token);

    // verify token 
    const data = jwt.verify(token, 'thisismycat');
    console.log(data);

}

testJsonwebToken();