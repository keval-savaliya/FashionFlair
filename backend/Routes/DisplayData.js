const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Category = require('../models/Category')
const Product = require('../models/maindata')

router.get('/DisplayData', async (req, res) => {
    try {
        const category = await Category.find({})
        const product = await Product.find({})
        res.send([product, category])
    } catch (error) {
        console.error(error.message)
        res.send("server error")
    }
})


module.exports = router;