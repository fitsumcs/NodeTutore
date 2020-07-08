// readline 
const readLine = require('readline');
const rl = readLine.createInterface({
   input : process.stdin,
   output : process.stdout

});


// collect Ansers and display 
module.exports =  (questions, done)=>
{
   const answers = [];
   const [firstQu] =  questions;
   const questionAnswerd = (answer)=>{
       answers.push(answer);
       if(answers.length < questions.length)
       {
           rl.question(questions[answers.length],questionAnswerd)
       }
       else
       {
           done(answers);
       }
   }

   rl.question(firstQu, questionAnswerd);



}



