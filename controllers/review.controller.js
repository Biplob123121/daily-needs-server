const Reviews = require('../models/review.model');

const newReview = async (req, res) => {
    try {
        const review = new Reviews({
            name: req.body.name,
            email: req.body.email,
            review: req.body.review
        })
        await review.save();
        res.status(201).json({ acknowledged: true, review })

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getReview = async (req, res) => {
    try {
        const allReviews = (await Reviews.find()).reverse();
        res.status(200).json(allReviews)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = { newReview, getReview }