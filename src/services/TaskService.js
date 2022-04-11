const Task = require('../models/task');

module.exports = {
    getTasks,
    addOrUpdateTask,
    findTaskById,
    deleteTask
}

async function getTasks() {
    return await Task.findOne({});
}

async function addOrUpdateTask(task) {
    let newTask = new Task(task);
    try {
        return await newTask.save(task);
    } catch (e) {
        return e;
    }
}

async function findTaskById(id) {
    return await Task.findById(id);
}

async function deleteTask(id) {
    return await Task.findByIdAndDelete(id);
}