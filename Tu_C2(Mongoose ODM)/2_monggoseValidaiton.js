//require 
const mongoose = require('mongoose');
const validator = require('validator');
const chalk = require('chalk')

// create connections and db 
mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {
    useNewUrlParser: true,
    useCreateIndex: true
});

// create model [collection] with schema validation
const Task = mongoose.model('Task', {
    taskName: {
        type: String,
        required: [true, chalk.red("Task Name is Required ")],
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error(chalk.red("It Must be Only String"));
            }
        }
    },
    completed: {
        type: String,
        required: [true, chalk.red("Task completions state is Required ")]
    },
    task_Number: {
        type: Number,
        required: true,
        min: [0, chalk.red("Task Number can not be Negative Number")]
    }
});

//add document with wrong schema 
const task1 = new Task({
    taskName: "Task",
    task_Number: 12
});
// save the data 
task1.save().then(() => { console.log("You Added one Task"); });