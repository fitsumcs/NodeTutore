// writeable stream 

const fs = require("fs");

const writeStream = fs.createWriteStream(`${__dirname}/assets/myfile.txt`, 'UTF-8');
const readStream = fs.createReadStream(`${__dirname}/assets/read.md`, 'UTF-8');
// writeStream.write("Hello ..\n");
// writeStream.write("World ..\n");

// pip from readable stream to writeable stream 
// process.stdin.on("data",data=>{
//     writeStream.write(data);
// });

//   With pipe method 
// process.stdin.pipe(writeStream);


// pip from readable stream to writeable stream 
// readStream.on("data",data=>{
//     writeStream.write(data);
// });

readStream.pipe(writeStream);