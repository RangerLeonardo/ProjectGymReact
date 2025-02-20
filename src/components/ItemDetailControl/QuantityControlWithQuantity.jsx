import React, { useState, useEffect } from 'react';

const QuantityControlWithQuantity = ({ cantidad }) => {
    const cantidadIsValid = cantidad !== undefined ? cantidad : 1;
    const [quantity, setQuantity] = useState(cantidadIsValid);

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <div className='div_detail_container_quantity'>
            <button className='btn_detail_decrement' onClick={decrement}>-</button>
            <p className='p_text_quantity'><span>{quantity}</span></p>
            <button className='btn_detail_increment' onClick={increment}>+</button>
        </div>
    );
};

export default QuantityControlWithQuantity;