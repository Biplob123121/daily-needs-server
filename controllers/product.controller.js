const Products = require('../models/product.model');


const getProducts = async (req, res) => {
    try {
        const allProducts = await Products.find();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
const getSelectedProducts = async (req, res) => {
    try {
        const category = req.query.category;
        const selectedProducts = await Products.find({ category: category });
        res.status(200).json(selectedProducts);
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

const searchProduct = async (req, res) => {
    try {
        const productName = req.query.searchTerm;
        let searchProduct = await Products.find({
            "$or": [
                { name: { '$regex': productName, '$options' : 'i' } }
            ]
        })
        res.status(200).json(searchProduct);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = { getProducts, addProduct, getSelectedProducts, searchProduct }