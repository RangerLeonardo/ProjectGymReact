import React, { createContext, useState } from 'react';

export const CartShoppingContext = createContext();

export const ContextCartShopping = ({ children }) => {
    const [cartShopping, setCartShopping] = useState([]);

    const getCartShopping = (item) => {
        setCartShopping([...cartShopping, item]);
    };

    return (
        <CartShoppingContext.Provider value={{ cartShopping, getCartShopping }}>
            {children}
        </CartShoppingContext.Provider>
    );
};

export default ContextCartShopping
