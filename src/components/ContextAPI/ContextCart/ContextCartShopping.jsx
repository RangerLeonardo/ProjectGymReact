import React, { useState } from 'react';
import CartShoppingContext from './CartShoppingContext';

// Función externa para actualizar el carrito de compras
const updateCartShopping = (cartShopping, product, quantityF) => {
    const updatedCart = [...cartShopping];
    const existingItemIndex = updatedCart.findIndex(cartItem => cartItem.id === product.id);

    if (existingItemIndex !== -1) {
        updatedCart[existingItemIndex].quantity += quantityF;
    } else {
        product.quantity = quantityF;
        updatedCart.push({...product});
    }

    return updatedCart;
};

const ContextCartShopping = ({ children }) => {
    const [cartShopping, setCartShopping] = useState([]);
    const [quantityFinal, setQuantityFinal] = useState(0);

    const getQuantityFinal = (quantity) => {
        setQuantityFinal((prevQuantity) => prevQuantity + quantity);
    };

    const getCartShopping = (product, quantity) => {
        const updatedCart = updateCartShopping(cartShopping, product, quantity);
        setCartShopping(updatedCart);
        getQuantityFinal(quantity);
    };

    return (
        <CartShoppingContext.Provider value={{ cartShopping, getCartShopping, quantityFinal }}>
            {children}
        </CartShoppingContext.Provider>
    );
};

export default ContextCartShopping;