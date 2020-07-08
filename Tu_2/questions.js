// readline 
const collectAnswers = require('./lib/collectAnswers')

const questions = [
    "What is your Name ?",
    "Where do you live?",
    "What are you doing now ? "
];

 const answerEvent =  collectAnswers(questions,answers=>{
    console.log("Thank You for Your Answers.");
    console.log(answers);
    
});

answerEvent.on("answer",answer=>{console.log(`Your Answer : ${answer}`)})
// answerEvent.on("complete",()=>process.exit());/

