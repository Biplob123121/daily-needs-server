const express = require('express');
const router = express.Router();

const { getProducts, addProduct, getSelectedProducts, searchProduct } = require('../controllers/product.controller');


router.get('/', getProducts);
router.get('/category', getSelectedProducts)
router.get('/search', searchProduct)
router.post('/', addProduct);

module.exports = router;