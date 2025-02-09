import React, { createContext, useState } from 'react';

export const CartShoppingContext = createContext();

export const ContextCartShopping = ({ children }) => {
    const [cartShopping, setCartShopping] = useState([]);

    const getCartShopping = (items) => {
        setCartShopping((prevCart) => [...prevCart, ...items]);
    };

    return (
        <CartShoppingContext.Provider value={{ cartShopping, getCartShopping }}>
            {children}
        </CartShoppingContext.Provider>
    );
};

export default ContextCartShopping;