const fs = require("fs");

// rename Dir 
// fs.renameSync(`${__dirname}/NewDir`,`${__dirname}/New`);

// Remove dir 
// If the dir not empty 
fs.readdirSync(`${__dirname}/New`).forEach(element => 
    {
        fs.unlinkSync(`${__dirname}/New/${element}`)
});

fs.rmdir(`${__dirname}/New`, err=>{
   if(err)
   {
       throw err;
   }
   console.log("Folder Removed ...")
});