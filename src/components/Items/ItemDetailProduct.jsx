import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import "../../styles/ItemDetailProduct.css"
import ProductDetail from '../ItemDetailControl/ProductDetail';


const ItemDetailProduct = () => {
    const location = useLocation();
    const product  = location.state;

    return (
        <ProductDetail 
            product={product} 
        />
    );
}

export default ItemDetailProduct