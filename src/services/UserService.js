const User = require('../models/user');

module.exports = {
    getUsers,
    addOrUpdateUser,
    findUserById,
    deleteUser
}

async function getUsers() {
    return await User.findOne({});
}
    
async function addOrUpdateUser(user) {
    let newUser = new User(user);
    try {
        return await newUser.save(user);
    } catch (e) {
        return e;
    }
}

async function findUserById(id) {
    return await User.findById(id);
}
async function deleteUser(id) {
    return await User.findByIdAndDelete(id);
}