const router = require('express').Router();
const { getCart, addToCart, removeFromCart, updateQuantity } = require('../controller/cartController');

router.get('/getcart/:userId', getCart);

router.post('/addtocart/:userId', addToCart);

router.delete('/deletefromcart/:userId/:productId', removeFromCart);

router.patch('/updateQuantity/:userId', updateQuantity);

module.exports = router;