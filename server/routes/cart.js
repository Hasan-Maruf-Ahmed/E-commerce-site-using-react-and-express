const router = require('express').Router();
const { getCart, addToCart, removeFromCart } = require('../controller/cartController');

router.get('/getcart/:userId', getCart);

router.post('/addtocart/:userId', addToCart);

router.delete('/deletefromcart/:userId/:productId', removeFromCart);

module.exports = router;