
const fs = require("fs");

const readStream = fs.createReadStream(`${__dirname}/assets/read.md`);

let fileText = "";

console.log("Type Something ..")

readStream.on("data", data=>{
    console.log(`I read ${data.length - 1} characters ..:)`);
    fileText +=data;
});

// reading the first chunk 
readStream.once("data",data=>{
    console.log(data);
})
readStream.on("end",()=>{
    console.log("Finished Reading data");
    console.log(`I read ${fileText.length - 1} characters ..:)`);
})