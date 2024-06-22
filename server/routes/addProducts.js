const router = require('express').Router();
const Products = require('../models/products')

router.post('/', async (req, res) =>{
    try {
        const products = new Products({ ...req.body });
        await products.save();
        res.status(200).send({ message: 'Product added successfully'})
    }
    catch (err) {
        res.status(500).send({message: "Internal Server Error", error: err.message });
    }
})

module.exports = router;