const router = require('express').Router();

const userController = require('../controllers/UserController')
const taskController = require('../controllers/TaskController')

router.route('/user').all(userController);

module.exports = router;    