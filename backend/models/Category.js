const mongoose = require('mongoose')
const { Schema } = mongoose;

const CategorySchema = new Schema({
    categoryname: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    info: {
        type: Array
    }
})

module.exports = mongoose.model('categoryschema', CategorySchema)