const express = require('express');
const router = express.Router();
const testimonial = require('../models/Testimonial');

router.post('/CreateTestimonial',async (req,res)=>{
    try{
        await testimonial.create({
            name:req.body.name,
            review:req.body.review
        })
        res.json({success:true})
    }catch(err){
        console.log(err)
        res.json({success:false})
    }
})

module.exports = router;