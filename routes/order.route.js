const express = require('express');
const router = express.Router();

const { newOrder, getOrder, updateOrder, getIndividualOrder, getSingleOrder, deleteOrder } = require('../controllers/order.controller');


router.post('/', newOrder);
router.get('/', getOrder);
router.get('/my-order/', getIndividualOrder);
router.get('/:id', getSingleOrder);
router.patch('/', updateOrder)
router.delete('/:id', deleteOrder)


module.exports = router