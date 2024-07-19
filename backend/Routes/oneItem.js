const express = require('express')
const router = express.Router()
const maindataSchema = require("../models/maindata")

router.get('/itemdisplay/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const oneitem = await maindataSchema.findById(id);
        res.send(oneitem)

    } catch (error) {
        console.error(error.message)
        res.send({ err: error })
    }
})


module.exports = router;