const Payments = require('../models/payment.model');

const newPayment = async (req, res) => {
    try {
        const payment = new Payments({
            name: req.body.name,
            email: req.body.email,
            transactionId: req.body.transactionId,
            price: req.body.price,
        })
        await payment.save()
        res.status(201).json({ acknowledged: true, payment })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = { newPayment }