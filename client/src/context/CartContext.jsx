import { createContext, useReducer } from "react"
import axios from "../axios"

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "SET_CART":
            return { ...state, items: action.payload };
        case "ADD_ITEM":
            {
            const itemIndex = state.items.findIndex(item => item.productId === action.payload.productId);
            if(itemIndex > -1){
                state.items[itemIndex].quantity += action.payload.quantity;
            }
            else {
                state.items.push(action.payload);
            }
            return { ...state, items: [ ...state.items ] };
        }
        case "REMOVE_ITEM":
            return { ...state, items: state.items.filter( item => item.productId !== action.payload.productId )};
        default:
            return state;
    }
}

export const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    const setCart = ( items ) => dispatch({ type: 'SET_CART', payload: items });
    const addItem = ( item ) => dispatch({ type: 'ADD_ITEM', payload: item });
    const removeItem = ( productId ) => dispatch({ type: 'REMOVE_ITEM', payload: productId });

    const fetchCart = async(userId) => {
        const response = await axios.get(`/api/cart/getcart/${userId}`);
        setCart(response.data.items);
    };
    
    const addToCart = async (userId, productId, quantity) => {
        const response = await axios.post(`/api/cart/addtocart/${userId}`, { productId, quantity });
        addItem(response.data.cart.items);
    }

    const removeFromCart = async (userId, productId)=> {
        await axios.delete(`/api/cart/deletefromcart/${userId}/${productId}`);
        removeItem(productId);
    }

    return (
        <CartContext.Provider value={{ state, fetchCart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};