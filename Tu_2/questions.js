// readline 
const collectAnswers = require('./lib/collectAnswers')

const questions = [
    "What is your Name ?",
    "Where do you live?",
    "What are you doing now ? "
];

collectAnswers(questions,answers=>{
    console.log("Thank You for Your Answers.");
    console.log(answers);
    process.exit();
});
