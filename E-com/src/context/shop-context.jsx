import React, { createContext } from "react";
import { useState } from "react";
import { PRODUCT } from "../products";

export const ShopContext = createContext(null);

const getDeafaultCart = () =>{
    let cart = {};
    for (let i = 1; i < PRODUCT.length +1; i++){
        cart[i] = 0;
}
return cart;
}

export const ShopContextProvider = (props) => {
    
        const [cartItems, setCartItems] = useState(getDeafaultCart());

        const addToCart = (itemId) =>{
                setCartItems((prev) => ({...prev, [itemId] : prev[itemId]+1}));
        };

        const removeToCart = (itemId) =>{
            setCartItems((prev) => ({...prev, [itemId] : prev[itemId]-1}));
        };

        const contextValue = {cartItems, addToCart, removeToCart};
        console.log (cartItems);
        return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    
};

export default ShopContextProvider;