const mongoose = require('mongoose');

// creating schema 
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true

    },
    completed: {
        type: Boolean,
        default: false

    }
});


const Task = mongoose.model('Tasks', taskSchema);

module.exports = Task;