const express = require("express")
const router = express.Router()
const dressSchema = require("../models/dress")

router.get('/onedress/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const onedress = await dressSchema.findById(id);
        res.send(onedress)

    } catch (error) {
        console.error(error.message)
        res.send({ err: error })
    }
})


module.exports = router;