import React, { useContext, useState } from 'react';
import { CartShoppingContext } from '../ContextAPI/ContextCart/CartShoppingContext';
import QuantityControl from './QuantityControl';

const ProductDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const { getCartShopping } = useContext(CartShoppingContext);

    const handleAddToCart = () => {
        getCartShopping(product, quantity);
    };

    return (
        <section className='section_detail_product view_default'>
            <div className='div_container_detail'>
                <div className='div_img_container'> 
                    <div>
                        <img src={product.img} alt={product.desc} />
                    </div>
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
                        ${product.price}
                    </div>
                    <div className='div_detail_principal_container_quantity'>
                        <QuantityControl 
                            quantity={quantity}
                            setQuantity={setQuantity}
                            stock={product.stock}
                        />
                    </div>
                    <div className='div_add_to_cart'>
                        <button className='btn_add_to_cart' onClick={handleAddToCart}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;