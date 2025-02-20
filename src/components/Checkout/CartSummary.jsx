import React, { useContext } from 'react'
import CartShoppingContext from '../ContextAPI/ContextCart/CartShoppingContext';
import "../../styles/cartSummary.css"
import QuantityControlWithQuantity from '../ItemDetailControl/QuantityControlWithQuantity';

const CartSummary = () => {

    const {cartShopping, quantityFinal} = useContext(CartShoppingContext);

    return (
        <section>
            {cartShopping.length === 0 ? (
                <div>
                    <h2>Hello world, there is nothing in your cart. Please add something to continue.</h2>
                </div>
            ) : (
                <div>
                    <div className='div_title_cart_summary'>
                        <h3>Tus productos</h3>
                    </div>
                    <div className='div_principal_cart_summary'>
                        <div className='div_cart_summary_items'>
                            <ul>
                                {cartShopping.map((item, index) => (
                                    <li key={index} className='li_cart_summary'>
                                        <div className='div_principal_li_cart_summary'>

                                            <div className='div_cart_summary_img'>
                                                <img src={item.img} alt={item.desc} />
                                            </div>

                                            <div>

                                                <div>
                                                    <h4>{item.name}</h4>
                                                    <h4>{item.desc}</h4>
                                                </div>

                                                <div>
                                                    <h4>${item.precio}.00</h4>
                                                </div>

                                                <div className='div_cart_summary_btn_eliminar'>
                                                    <button onClick={console.log("Eliminando")}>Eliminar</button>
                                                </div>

                                            </div>

                                            <div className='div_cart_summary_quantity_control'>
                                                <QuantityControlWithQuantity 
                                                cantidad={item.cantidad}
                                                />
                                            </div>

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='div_cart_summary_checkout'>
                            <h3>Total</h3>
                            <h3>Cantidad</h3>
                            <h3>Dirección</h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default CartSummary
