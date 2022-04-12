const router = require('express').Router();

const userController = require('../controllers/UserController')
const taskController = require('../controllers/TaskController')

router.route('/user').all(userController);

router.route('/task').all(taskController);

module.exports = router;    