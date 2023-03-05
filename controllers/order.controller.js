const Orders = require('../models/order.model');


const newOrder = async (req, res) => {
    try {
        const newOrder = new Orders({
            name: req.body.name,
            email: req.body.email,
            products: req.body.products,
            totalPrice: req.body.totalPrice
        })

        await newOrder.save();
        res.status(201).json({ acknowledge: true, newOrder })

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getOrder = async (req, res) => {
    try {
        const orders = await Orders.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const updateOrder = async(req, res)=>{
    try {
        
        
    } catch (error) {
        
    }
}

module.exports = { newOrder, getOrder, updateOrder }