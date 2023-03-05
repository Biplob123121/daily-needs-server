const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/db')

const productRouter = require('./routes/product.route');
const userRouter = require('./routes/user.route');
const orderRouter = require('./routes/order.route');

const app = express();


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);




app.get('/', (req, res) => {
    res.sendFile(__dirname + '/./views/index.html');
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