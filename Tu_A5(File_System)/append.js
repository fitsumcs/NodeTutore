const fs = require("fs");
const colorData = require(`${__dirname}/files/colors.json`);

colorData.colorList.forEach(element => {
    fs.appendFile(`${__dirname}/files/colors.md`,`${element.color} : ${element.hex}\n`,err=>{
        if(err)
        throw err
        console.log("Color Data Appended");
    })
});