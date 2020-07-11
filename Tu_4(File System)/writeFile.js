const fs = require("fs");

const text = `
  
#This is a new file 

we can write text to a  file with fs.writeFile

So far we demo : 

* fs.readdir
* fs.readFile

Now ==> #fs.writeFile
`;

fs.writeFile(`${__dirname}/files/newFile.md`,text.trim(),err=>{
    if(err)
    {
        throw err;
    }
    console.log("File Has been Written...:)");
} );



