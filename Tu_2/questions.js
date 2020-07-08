// readline 
const readLine = require('readline');
const rl = readLine.createInterface({
   input : process.stdin,
   output : process.stdout

});


const questions = [
    "What is your Name ?",
    "Where do you live?",
    "What are you doing now ? "
];




// collect Ansers and display 
function collectAnswers(questions, done)
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

//    done (answers);

}




collectAnswers(questions,answers=>{
    console.log("Thank You for Your Answers.");
    console.log(answers);
    process.exit();
});
