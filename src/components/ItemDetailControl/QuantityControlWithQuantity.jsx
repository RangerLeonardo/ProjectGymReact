import React, { useState, useEffect } from 'react';

const QuantityControlWithQuantity = ({ cantidad, onQuantityChange, stock }) => {
    const [quantity, setQuantity] = useState(cantidad);

    useEffect(() => {
        setQuantity(cantidad);
    }, [cantidad]);

    const increment = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity <= stock) {
                const newQuantity = prevQuantity + 1;
                onQuantityChange(newQuantity);
                return newQuantity;
            }else{
                alert("Sin inventario suficiente");
                return prevQuantity;
            }
        });
    };

    const decrement = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity > 1) {
                const newQuantity = prevQuantity - 1;
                onQuantityChange(newQuantity);
                return newQuantity;
            }
            return prevQuantity;
        });
    };

    return (
        <div className='div_detail_container_quantity'>
            <button className='btn_detail_decrement' onClick={decrement}>-</button>
            <p className='p_text_quantity'><span>{quantity}</span></p>
            <button className='btn_detail_increment' onClick={increment}>+</button>
        </div>
    );
};

export default QuantityControlWithQuantity;
