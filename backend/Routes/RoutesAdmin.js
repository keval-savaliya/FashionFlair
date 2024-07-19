const express = require('express');
const router = express.Router();
const CategorySchema = require('../models/Category')
const MaindataSchema = require('../models/maindata')
const AdminOrder = require('../models/AdminOrder')

router.post('/createProduct', async (req, res, next) => {
    const {
        name,
        category,
        price,
        sale_price,
        company_name,
        sizes,
        careinstructions,
        packContains,
        image,
        info
    } = req.body
    const newProduct = new MaindataSchema({
        name,
        category,
        price,
        sale_price,
        company_name,
        sizes,
        careinstructions,
        packContains,
        image,
        info
    })
    try {
        await newProduct.save();
        res.status(200).json("Product added Successfully");
    } catch (err) {
        next(err);
    }
})

router.post('/createCategory', async (req, res, next) => {
    const {
        categoryname,
        image,
        info
    } = req.body
    const newCategory = new CategorySchema({
        categoryname,
        image,
        info
    })
    try {
        await newCategory.save();
        res.status(200).json("Product added Successfully");
    } catch (err) {
        next(err);
    }
})

router.delete('/deleteProduct/:id', async (req, res, next) => {
    const deletedDocument = await MaindataSchema.findByIdAndDelete(req.params.id)
    if (!deletedDocument) {
        return res.status(404).json({ error: 'Document not found' });
    }
    res.status(200).json({ message: 'Document deleted successfully' });
})

router.delete('/deleteCategory/:id', async (req, res, next) => {
    const deletedDocument = await CategorySchema.findByIdAndDelete(req.params.id)
    const deletedProduct = await MaindataSchema.deleteMany({ category : deletedDocument.categoryname})
    console.log(deletedProduct);
    if (!deletedDocument) {
        return res.status(404).json({ error: 'Document not found' });
    }
    res.status(200).json({ message: 'Document deleted successfully' });
})

router.patch('/editProduct/:id', async (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    const { name,
        category,
        price,
        sale_price,
        company_name,
        sizes,
        careinstructions,
        packContains,
        image,
        info } = req.body

    try {
        const result = await MaindataSchema.updateOne({ _id: id }, {
            $set: {
                name,
                category,
                price,
                sale_price,
                company_name,
                sizes,
                careinstructions,
                packContains,
                image,
                info
            }
        });
        if (result.matchedCount === 0) {
            res.status(404).json({ message: 'Document not found' });
        } else {
            res.status(200).json({ message: 'Document updated successfully', id: id });
        }
    } catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

router.post('/addOrder', async (req, res, next) => {
    const {
        name,
        email,
        contactno,
        address,
        pincode,
        city,
        state,
        cartitems
    } = req.body
    const newCategory = new AdminOrder({
        name,
        email,
        contactno,
        address,
        pincode,
        city,
        state,
        cartitems
    })
    try {
        await newCategory.save();
        res.status(200).json("Added to Admin Orders");
    } catch (err) {
        next(err);
    }
})

router.delete('/deleteOrder/:id', async (req, res, next) => {
    const deletedDocument = await AdminOrder.findByIdAndDelete(req.params.id)
    console.log(deletedDocument);
    if (!deletedDocument) {
        return res.status(404).json({ error: 'Document not found' });
    }
    const allOrder = await AdminOrder.find();
    res.status(200).json(allOrder);
})

router.patch('/editCategory/:id', async (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    const { 
        categoryname,
        image,
        info } = req.body

    try {
        const result = await CategorySchema.updateOne({ _id: id }, {
            $set:{
                categoryname,
                image,
                info
            }
        });
        if (result.matchedCount === 0) {
            res.status(404).json({ message: 'Document not found' });
        } else {
            res.status(200).json({ message: 'Document updated successfully', id: id });
        }
    } catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

module.exports = router;