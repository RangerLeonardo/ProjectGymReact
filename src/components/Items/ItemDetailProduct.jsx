import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { db } from '../db'
import "../../styles/ItemDetailProduct.css"

const ItemDetailProduct = () => {
    const location = useLocation();
    const product  = location.state;
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <section className='section_detail_product'>
            <div className='div_container_detail'>
                <div className='div_img_container'> 
                    <img src={product.img} alt={product.desc} />
                </div>
                <div className='div_detail_container_data'>
                    <div>
                        <h2>{product.name}</h2>
                    </div>
                    <div className='div_detail_desc'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eum minima et natus molestiae, <br />saepe nobis esse, aspernatur 
                            sapiente similique quidem laboriosam maxime, tenetur <br /> suscipit quod 
                            illum labore laudantium animi fugit!</p>
                    </div>
                    <div className='div_detail_price'>
                        ${product.precio}
                    </div>
                    <div className='div_detail_principal_container_quantity'>
                        <div className='div_detail_container_quantity'>
                            <button className='btn_detail_decrement' onClick={decrement}>-</button>
                            <p className='p_text_quantity'><span>{quantity}</span></p>
                            <button className='btn_detail_increment' onClick={increment}>+</button>
                        </div>
                    </div>
                    <div className='div_add_to_cart'>
                        <button className='btn_add_to_cart'>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemDetailProduct
