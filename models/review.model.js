const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    review: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        default: 'https://i.ibb.co/nrn7tt3/user-avatar.png'
    }
})

module.exports = mongoose.model('Reviews', reviewSchema)