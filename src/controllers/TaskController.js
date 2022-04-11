const taskService = require('../services/TaskService.js');
const router = require('express').Router();

router.get('/task', getTasks);
router.post('/task', addOrUpdateTask);
router.get('/task/mytask', getMyTask);
router.delete('/task', deleteTask);

async function getTasks(req, res) {
    res.send(await taskService.getTasks())
}

async function addOrUpdateTask(req, res) {
    res.send(await taskService.addOrUpdateTask(req.body))
}

async function getMyTask(req, res) {
    res.send(await taskService.findTaskById(req.task._id))
}

async function deleteTask(req, res) {
    res.send(await taskService.deleteTask(req.task._id))
}


module.exports = router;