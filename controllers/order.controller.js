const Orders = require('../models/order.model');


const newOrder = async (req, res) => {
    try {
        const newOrder = new Orders({
            name: req.body.name,
            email: req.body.email,
            products: req.body.products,
            totalPrice: req.body.totalPrice,
            date: req.body.date
        })

        await newOrder.save();
        res.status(201).json({ acknowledge: true, newOrder })

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getOrder = async (req, res) => {
    try {
        const orders = (await Orders.find()).reverse();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}


const getSingleOrder = async (req, res) => {
    try {
        const order = await Orders.find({ _id: req.params.id });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getIndividualOrder = async (req, res) => {
    try {
        const email = req.query.email;
        const orders = (await Orders.find({ email: email })).reverse();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const updateOrder = async (req, res) => {
    try {
        const order = await Orders.findOne({ _id: req.params.id });
        order.paid = 'paid',
            await order.save()
        res.status(200).json({ modified: true, order });

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const deleteOrder = async (req, res) => {
    try {
        const order = await Orders.deleteOne({ _id: req.params.id })
        res.status(200).json({ message: 'Order is deleted.' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = { newOrder, getOrder, updateOrder, getIndividualOrder, getSingleOrder, deleteOrder }