const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
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
            },
            size:{
                type: String
            }
        }]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    contactno:{
        type: String
    },
    address:{
        type: String
    },
    pincode:{
        type: String
    },
    city:{
        type: String
    },
    state:{
        type: String
    },
    isOrdered:{
        type:Boolean,
        default: false
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Useranddata', UserSchema)