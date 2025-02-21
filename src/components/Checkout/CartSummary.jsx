import React, { useContext } from 'react'
import CartShoppingContext from '../ContextAPI/ContextCart/CartShoppingContext';
import "../../styles/cartSummary.css"
import QuantityControlWithQuantity from '../ItemDetailControl/QuantityControlWithQuantity';

const CartSummary = () => {

    const {cartShopping, quantityFinal} = useContext(CartShoppingContext);

    function calcTotal() {
        let sum = 0;
        const cartShoppingTemp = [...cartShopping];

        cartShoppingTemp.forEach(item => {
            sum += item.price * item.quantity;
        });

        return sum;
    }

    const total = calcTotal();
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
                                                    <h4>${item.price}.00</h4>
                                                </div>

                                            </div>

                                            <div className='div_cart_summary_quantity_control'>
                                                <QuantityControlWithQuantity cantidad={item.quantity}/>
                                                <div className='div_cart_summary_btn_eliminar'>
                                                    <button onClick={console.log("Eliminando")}>Eliminar</button>
                                                </div>
                                            </div>

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='div_cart_summary_checkout'>
                            <div>
                                <h3>Total: ${total}.00</h3>
                            </div>
                            <div>
                                <h3>Cantidad: {quantityFinal}</h3>
                            </div>
                            <div>
                                <h3>Dirección</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default CartSummary
