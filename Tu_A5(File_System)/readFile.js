const fs = require("fs");
// Sync
// const text = fs.readFileSync(`${__dirname}/files/readme.md`,"UTF-8");

// Async Text 
// fs.readFile(`${__dirname}/files/readme.md`,"UTF-8",(err,text)=>{
//     console.log(text);

// });

// Async Binary 
fs.readFile(`${__dirname}/files/alex.jpg`,(err,img)=>{
    if(err)
    {
        console.log(`Error Occured : ${err.message}`);
        process.exit();
    }
    console.log(img);

});




