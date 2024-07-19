const mongoose = require('mongoose')
const { Schema } = mongoose;

const AdminOrder = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    cartitems: {
        type: [{
            category: {
                type: String
            },
            name: {
                type: String
            },
            company_name: {
                type: String
            },
            price: {
                type: Number,
                multipleOf: 0.01,
            },
            sale_price: {
                type: Number,
                multipleOf: 0.01,
            },
            image: {
                type: String
            }
        }]
    },
    contactno: {
        type: String
    },
    address: {
        type: String
    },
    pincode: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('AdminOrder', AdminOrder)