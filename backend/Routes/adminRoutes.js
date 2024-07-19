const express = require('express');
const router = express.Router();
const User = require('../models/User')


const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req._id);
        if (user.isAdmin === false) {
            return res.status(401).send({
                success: false,
                message: "UnAuthorized Access",
            });
        } else {
            next();
        }

    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            error,
            message: "Error in admin middelware",
        });
    }
}


router.get("/admin-auth", isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

const requiredSignIn = async (req, res, next) => {
    try {

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

    } catch (error) {
        console.log(error);
    }
}

module.exports = router;