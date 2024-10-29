const fs = require("fs");

// Rename A file 
fs.renameSync(`${__dirname}/RenameTest/rename.md`,`${__dirname}/RenameTest/newName.md`);

// Move 
fs.rename(`${__dirname}/files/colors.md`,`${__dirname}/RenameTest/colors.md`,err=>{
    if(err)
      throw err;
    console.log("File Moved ..");
});

// delete 
setTimeout(()=>{
   fs.unlinkSync(`${__dirname}/files/newFile.md`);

  console.log('File Removed  after : ' + 4000/1000 + 'seconds' );

},4000);