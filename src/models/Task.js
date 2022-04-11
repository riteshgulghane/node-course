const mongoose = require('mongoose');

const taskScheme = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    }
})

// taskScheme.virtual('author').get

module.exports = mongoose.model('Task', taskScheme);