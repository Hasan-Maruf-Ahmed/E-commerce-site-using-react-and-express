const router = require('express').Router();
const Products = require('../models/products')

router.get('/', async (req, res) => {
    try {
        const allProducts = await Products.find().select("-createdAt -__v");
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

module.exports = router;