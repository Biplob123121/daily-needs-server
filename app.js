const express = require('express');
const cors = require('cors');
const { json } = require('express');
require('dotenv').config();


const productRouter = require('./routes/product.route')

const app = express();


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRouter)


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