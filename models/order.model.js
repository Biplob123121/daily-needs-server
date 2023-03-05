const mongoose = require('mongoose');

const orderShema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    products: {
        type: Array,
        require: true
    },
    totalPrice: {
        type: String,
        require: true
    },
    paid: {
        type: String
    }
})

module.exports = mongoose.model("Orders", orderShema)