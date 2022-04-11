const userService = require('../services/UserService');
const router = require('express').Router();

router.get('/user', getUsers);
router.post('/user', addOrUpdateUser);
router.get('/user/me', getMe);
router.delete('/user', deleteUser);

async function getUsers(req, res) {
    res.send(await userService.getUsers())
}

async function addOrUpdateUser(req, res) {
    res.send(await userService.addOrUpdateUser(req.body))
}

async function getMe(req, res) {
    res.send(await userService.findUserById(req.user._id))
}

async function deleteUser(req, res) {
    res.send(await userService.deleteUser(req.user._id))
}


module.exports = router;
