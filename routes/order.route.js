const express = require('express');
const router = express.Router();

const { newOrder, getOrder } = require('../controllers/order.controller');


router.post('/', newOrder);
router.get('/', getOrder);


module.exports = router