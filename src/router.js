const router = require('express').Router();

const userController = require('./controllers/UserController')

router.route('/user').all(userController);

module.exports = router;    