const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    transactionId: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Payments", paymentSchema)