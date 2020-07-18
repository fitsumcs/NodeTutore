let tasks = [];

function viewTaskList() {
    return tasks;
}

function addTask(task) {
    tasks.push(task);
}

module.exports = { viewTaskList, addTask };