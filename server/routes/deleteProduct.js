const router = require('express').Router();
const Products = require('../models/products')


router.delete('/:id', async (req, res) => {
    try {
        await Products.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: 'Product deleted successfully'});
    } catch (err) {
        res.status(500).send({ message: 'Internal Server Error', error: err.message });
    }
})

module.exports = router;