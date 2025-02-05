import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import "../../styles/ItemDetailProduct.css"
import ProductDetail from '../ItemDetailControl/ProductDetail';


const ItemDetailProduct = () => {
    const location = useLocation();
    const product  = location.state;

    const [quantity, setQuantity] = useState(1);
    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <ProductDetail 
            product={product} 
            quantity={quantity} 
            increment={increment} 
            decrement={decrement} 
        />
    );
}

export default ItemDetailProduct