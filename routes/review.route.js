const express = require('express');
const router = express.Router();

const { newReview, getReview } = require('../controllers/review.controller');


router.post('/', newReview);
router.get('/', getReview);


module.exports = router;