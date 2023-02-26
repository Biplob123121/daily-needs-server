const mongoose = require('mongoose');

const productSchema =  mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    price:{
        type: String,
        require: true,
    },
    picture:{
        type: String,
        require: true,
    },
    minOrder:{
        type: String,
        require: true,
    },
    category:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    }
})

module.exports= mongoose.model("Products", productSchema);