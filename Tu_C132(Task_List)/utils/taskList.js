const { functions } = require("underscore");

let tasks = ['Go to Office', 'Open PC'];

function viewTaskList() {
    return tasks;
}

function addTask(task) {
    tasks.push(task);
}

module.exports = { viewTaskList, addTask };