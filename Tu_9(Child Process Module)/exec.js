// working with child process 
const cp = require("child_process");

// Opening browser 
cp.exec("open https://www.google.com");

// dir / ls
cp.exec("dir",(err,data)=>{
    if(err)
     throw err;
     console.log(data);
});