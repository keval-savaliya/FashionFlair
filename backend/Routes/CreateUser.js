const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const cook = require("cookie-parser");
const jwt = require('jsonwebtoken')
const Order = require('../models/AdminOrder')


jwtSecret = process.env.jwtSecret;

// Middleware to verify JWT token
const verifyToken = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const verifyToken = jwt.verify(token, jwtSecret);
    const user = await User.findOne({ _id: verifyToken._id });

    if (!user) {
        throw new Error('User Not found');
    }

    req.user = user;

    next();

};

router.post("/createuser", [
    body("email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 8 })
]

    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        // const salt = await bcrypt.genSalt(10)
        let secpassword = await bcrypt.hash(req.body.password, 10)

        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secpassword,
                location: req.body.location,
                cartitems: req.body.cartitems,
                contactno: req.body.contactno,
                address: req.body.address,
                pincode: req.body.pincode,
                city: req.body.city,
                state: req.body.state
            })
            res.json({ success: true })
        } catch (error) {
            console.log(error)
            res.json({ success: false })
        }
    })

router.post("/loginuser", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ error: 'please enter required details' });
    }

    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).send({ message: 'Invalid details' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send({ message: 'Invalid details' });
        }

        const data = {
            user: {
                id: user.id
            }
        };

        const authToken = jwt.sign(data, jwtSecret);

        console.log("my auth token is " + authToken);

        res.cookie("mytoken", authToken, {
            maxAge: 900000,
            httpOnly: true,
            secure: true,
            sameSite: "none",
            // path: '/',
        });

        return res.json({ success: true, authToken: authToken, isAdmin: user.isAdmin, email: user.email });
    } catch (error) {
        console.error("Error setting cookie:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});


router.patch('/addtocart/:email', async (req, res) => {
    try {
        const username = req.params.email;
        const { category, name, company_name, price, sale_price, image, size } = req.body;
        // Find the user by ID
        const user = await User.findOne({ email: username });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Add item to cartitems array
        user.cartitems.push({
            category,
            name,
            company_name,
            price,
            sale_price,
            image,
            size
        });

        // Save the updated user
        await user.save();

        res.json({ success: true, user });
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get('/getUsers/:userEmail', async (req, res) => {
    try {
        const username = req.params.userEmail;
        const user = await User.findOne({ email: username });
        // console.log(user);
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.send("server error")
    }
})

router.patch('/savecontactdetails/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { name,
            contactno,
            address,
            pincode,
            city,
            state,
            isOrdered,
        cartitems} = req.body
        try {
            const result = await User.updateOne({ _id: id }, {
                $set: {
                    name,
                    contactno,
                    address,
                    pincode,
                    city,
                    state,
                    isOrdered,
                    cartitems
                }
            });
            if (result.matchedCount === 0) {
                res.status(404).json({ message: 'User found' });
            } else {
                res.status(200).json({ message: 'Details updated successfully', id: id });
            }
        } catch (error) {
            console.error('Error updating document:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
        // res.send(user)
    } catch (error) {
        console.error(error.message)
        res.send("server error")
    }
})

router.patch('/deleteElement/:objectId', async (req, res) => {

    const { objectId } = req.params;

    const { cartitems, objectToDelete } = req.body;

    try {
        const result = await User.updateOne(
            { _id: objectId },
            { $pull: { [cartitems]: { _id: objectToDelete } } }
        );

        console.log(objectId, cartitems, objectToDelete);

        console.log(result);

        res.status(result.modifiedCount ? 200 : 404).json({
            message: result.modifiedCount ? 'Object deleted from array successfully' : 'Object not found or array not modified'
        });


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

})

// Protected route - requires a valid token
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Protected route accessed', user: req.user });
});

router.get('/demodemo', (req, res) => {
    res.cookie("name", "hemang");
    res.send("<h1>hello</h1>");
});


router.get('/getOrders',async (req, res) => {
    try {
        const orders = await Order.find({})
        res.send(orders);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;