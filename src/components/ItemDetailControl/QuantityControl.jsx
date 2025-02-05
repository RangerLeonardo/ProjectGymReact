import React from 'react';

const QuantityControl = ({ quantity, increment, decrement }) => {
    return (
        <div className='div_detail_container_quantity'>
            <button className='btn_detail_decrement' onClick={decrement}>-</button>
            <p className='p_text_quantity'><span>{quantity}</span></p>
            <button className='btn_detail_increment' onClick={increment}>+</button>
        </div>
    );
};

export default QuantityControl;