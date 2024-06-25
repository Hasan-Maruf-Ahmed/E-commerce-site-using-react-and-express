const Cart = require("../models/cart");

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate(
      "items.productId"
    );
    res.status(200).json(cart);
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal Server Error", error: err.message });
  }
};

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    let cart = await Cart.findOne({ userId: req.params.userId });

    if (!cart) {
      cart = new Cart({ userId: req.params.userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    res.status(200).send({ cart: cart, message: "Item added to Cart" });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal Server Error", error: err.message });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) return res.status(404).send("Cart not found");

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== req.params.productId
    );
    await cart.save();

    res.status(200).send({ message: "Item removed from Cart" });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal Server Error", error: err.message });
  }
};

const updateQuantity = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const cart = await Cart.findOne({ userId: req.params.userId });

    if (!cart) {
      return res.status(404).send("Cart not found");
    }

    const item = cart.items.find(item => item.productId.toString() === productId);

    if (!item) {
      return res.status(404).send({ message: "Item not found in Cart" });
    }

    // Validate quantity, assuming it's a positive integer
    if (typeof quantity !== 'number' || quantity <= 0) {
      return res.status(400).send({ message: "Invalid quantity" });
    }

    item.quantity = quantity;
    await cart.save();

    return res.status(200).send({ cart, message: "Quantity updated" });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Internal Server Error", error: err.message });
  }
};


module.exports = { getCart, addToCart, removeFromCart, updateQuantity };