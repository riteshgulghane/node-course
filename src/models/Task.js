const mongoose = require('mongoose');

const taskScheme = mongoose.Schema({
    title: {
        type: String,
        required: true,
        camelcase: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: require('mongodb').ObjectId,
        ref: 'User',
        // required: true
    }
}, {
    timestamps: true
})

// taskScheme.virtual('author').get

module.exports = mongoose.model('Task', taskScheme);