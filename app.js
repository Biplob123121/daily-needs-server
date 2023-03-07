const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/db')
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const productRouter = require('./routes/product.route');
const userRouter = require('./routes/user.route');
const orderRouter = require('./routes/order.route');
const paymentRouter = require('./routes/payment.route');

const app = express();


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/payments', paymentRouter);




app.get('/', (req, res) => {
    res.sendFile(__dirname + '/./views/index.html');
});



// route for stripe
app.post("/create-payment-intent", async (req, res) => {
    const price = req.body.totalPrice;
    const amount = price * 100;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        "payment_method_types": [
            "card"
        ]
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});



// Route not found
app.use((req, res, next) => {
    res.status(404).json({
        message: "Route not Found..."
    })
})

// server error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Something is wrong"
    })
})

module.exports = app;