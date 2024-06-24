import { createContext, useReducer } from "react"

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "SET_CART":
            return { ...state, items: action.payload };
        case "ADD_ITEM":
            const itemIndex = state.items.findIndex(item => item.productId === action.payload.productId);
            if(itemIndex > -1){
                state.items[itemIndex].quantity += action.payload.quantity;
            }
            else {
                state.items.push(action.payload);
            }
            return { ...state, items: [ ...state.items ] };
        case "REMOVE_ITEM":
            
    }
}

export const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    );
};