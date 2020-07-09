const fs = require("fs");


//check if the dir exist 
if(fs.existsSync(`${__dirname}/NewDir`))
{
    console.log("The Directory Exist");
}
else
{
// create dir 
fs.mkdir(`${__dirname}/NewDir`, err=>{
    if(err)
    {
        throw err;
    }
   
    console.log("Directory Created ..")
   
   });
}

