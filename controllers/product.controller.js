const Products = require('../models/product.model');


const getProducts = async (req, res) => {
    try {
        const allProducts = await Products.find();
        res.status(200).json({ acknowledged: true, allProducts });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const addProduct = async (req, res) => {
    try {
        const newProduct = new Products({
            name: req.body.name,
            price: req.body.price,
            picture: req.body.picture,
            minOrder: req.body.minOrder,
            category: req.body.category,
            description: req.body.description,
        })
        await newProduct.save();
        res.status(201).json({ acknowledged: true, newProduct });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = { getProducts, addProduct }