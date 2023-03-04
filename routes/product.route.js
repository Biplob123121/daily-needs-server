const express = require('express');
const router = express.Router();

const { getProducts, addProduct, getSelectedProducts } = require('../controllers/product.controller');


router.get('/', getProducts);
router.get('/category', getSelectedProducts)
router.post('/', addProduct);

module.exports = router;