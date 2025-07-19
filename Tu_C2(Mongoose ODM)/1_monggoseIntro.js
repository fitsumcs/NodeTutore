//require 
const mongoose = require('mongoose');

// create connections and db 
mongoose.connect('mongodb://127.0.0.1:27017/task-manager');

// create model [collection] 
const Task = mongoose.model('Task', {
    taskName: String,
    completed: Boolean
});

//add document 

const task1 = new Task({
    taskName: "Reading Node",
    completed: false
});
// save the data 
task1.save().then(() => { console.log("You Added one Task"); });