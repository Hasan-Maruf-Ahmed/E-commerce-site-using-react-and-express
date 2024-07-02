/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import axios from "../axios";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, items: action.payload };
    case "ADD_ITEM": {
      const itemIndex = state.items.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (itemIndex > -1) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      return { ...state, items: [...state.items] };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.productId !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "CLEAR_CART":
      // console.log("CLEAR_CART action dispatched");
      return { items: [] };
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const setCart = (items) => dispatch({ type: "SET_CART", payload: items });
  const addItem = (item) => dispatch({ type: "ADD_ITEM", payload: item });
  const removeItem = (productId) =>
    dispatch({ type: "REMOVE_ITEM", payload: productId });
  const updateQuantity = async (userId, productId, quantity) => {
    try {
      await axios.patch(`/cart/updateQuantity/${userId}`, {
        productId,
        quantity,
      });
      dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const fetchCart = async (userId) => {
    const response = await axios.get(`/cart/getcart/${userId}`);
    setCart(response.data.items);
  };

  const addToCart = async (userId, productId, quantity) => {
    try {
      const response = await axios.post(`/cart/addtocart/${userId}`, {
        productId,
        quantity,
      });
      addItem(response.data.cart.items);
      toast.success("Item added to cart");
    } catch (err) {
      toast.error(err.massage);
    }
  };

  const removeFromCart = async (userId, productId) => {
    try {
      await axios.delete(`/cart/deletefromcart/${userId}/${productId}`);
      removeItem(productId);
      toast.success("Item removed from cart");
    } catch (err) {
      toast.error(err.massage);
    }
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    // console.log("working");
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        fetchCart,
        addToCart,
        removeFromCart,
        getTotalItems,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
