const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

// Sign up endpoint
router.post('/googlesignup', async (req, res) => {
    try {
        const user = await User.findOne({email:req.body.email})
        if(user){
            const token = jwt.sign({ id: user._id }, process.env.jwtSecret);
            res.cookie('google_cookie', token, {httpOnly: true})
                .status(200).json({ success: true })
        }else{
            const generatedPassword = Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
            const newUser = new User({name:req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4) ,email:req.body.email, password:hashedPassword, location:req.body.location})
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.jwtSecret);
            res.cookie('google_cookie', token, { httpOnly: true })
                .status(200).json({ success: true, authToken: token })
        }
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ success: false });
    }
});


module.exports = router;