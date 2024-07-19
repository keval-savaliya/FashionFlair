const express = require('express')
const router = express.Router()
const categoryschema = require("../models/Category")
const Product = require('../models/maindata')

// const detcat = mongoose.model('detcat', {}, global.Category)
router.get('/detailcategory/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const onecat = await categoryschema.findById(id);
        const products = await Product.find({}) 
        res.send([onecat, products])

    } catch (error) {
        console.error(error.message)
        res.send({err:error})
    }
})


module.exports = router;