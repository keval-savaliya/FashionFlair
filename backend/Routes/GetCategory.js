const express = require('express')
const router = express.Router()
const Category = require("../models/Category")
const Testimonial = require("../models/Testimonial")

router.get('/GetCategory',async (req, res) => {
    try {
        const category = await Category.find({})
        const testimonial = await Testimonial.find({})
        console.log(category);
        res.send([global.Category, testimonial])
    } catch (error) {
        console.error(error.message)
        res.send("server error")
    }
})


module.exports = router;