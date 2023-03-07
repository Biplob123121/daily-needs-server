const express = require('express');
const router = express.Router();

const { newPayment } = require('../controllers/payment.controller');



router.post('/', newPayment);

module.exports = router