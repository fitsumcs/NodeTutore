// process.stdout.write("Hello  ");
// process.stdout.write("World \n\n\n");
// QUestions 
const questons = [
        "What is your name ? ",
        "What would you rather be doing ? ",
        "What is your prefered programing language ?"

];

const ask = (i=0)=>{
    process.stdout.write(`\n\n ${questons[i]}`);
    process.stdout.write(`>`);
}

ask();
// Answers 
let answers = [];
// stdin 
process.stdin.on("data", data=>{
    answers.push(data.toString());
    if(answers.length < questons.length)
    {
         ask(answers.length)
    }
    else{
        process.exit();
    }
    
});

process.on('exit',()=>{

     const [name,activity,language] = answers;

     console.log(`
       
     Thank you fro your answers . 

     Go ${activity} ${name} you can write ${language} code later !!!
       
     `);

});