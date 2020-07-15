// readline 
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout

});

// Event 
const { EventEmitter } = require('events');


// collect Ansers and display 
module.exports = (questions, done) => {
    const answers = [];
    const [firstQu] = questions;
    const emitter = new EventEmitter();
    const questionAnswerd = (answer) => {
        emitter.emit("answer", answer);
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswerd);
        } else {
            emitter.emit("complete", answers);
            done(answers);
        }
    };

    rl.question(firstQu, questionAnswerd);

    return emitter;

};