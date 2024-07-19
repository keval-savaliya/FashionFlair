const mongoose = require('mongoose')
const { Schema } = mongoose;

const MaindataSchema = new Schema({
    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        multipleOf: 0.01,
        required: true,
    },
    sale_price: {
        type: Number,
        multipleOf: 0.01,
        required: true,
    },
    company_name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        multipleOf : 0.01,
    },
    sizes:{
        type : Array,
        required: true
    },
    careinstructions:{
        type : String
    },
    packContains:{
        type : String
    },
    info:{
        type : Object
    }
    
})

module.exports = mongoose.model('MaindataSchema', MaindataSchema)