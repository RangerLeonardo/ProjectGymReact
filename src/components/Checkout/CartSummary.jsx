import React, { useContext } from 'react'
import CartShoppingContext from '../ContextAPI/ContextCart/CartShoppingContext';
import { Link } from "react-router-dom";
import "../../styles/cartSummary.css"
import QuantityControlWithQuantity from '../ItemDetailControl/QuantityControlWithQuantity';
import { SessionContext } from '../ContextAPI/ContextSession/SessionContext';

const CartSummary = () => {

    const {cartShopping, setCartShopping, quantityFinal, setQuantityFinal} = useContext(CartShoppingContext);
    const { session, user } = useContext(SessionContext);

    function calcTotal() {
        let sum = 0;
        const cartShoppingTemp = [...cartShopping];

        cartShoppingTemp.forEach(item => {
            sum += item.price * item.quantity;
        });

        return sum;
    }
    const total = calcTotal();

    const handleDeleteFromCart = (item) => () => {
        const updatedCart = cartShopping.filter(cartItem => cartItem.id !== item.id);
        setCartShopping(updatedCart);

    };



    return (
        <section className='view_default'>
            {cartShopping.length === 0 ? (
                <div>
                    <h2>There is nothing in your cart. Please add something to continue.</h2>
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
                                                <QuantityControlWithQuantity cantidad={item.quantity} setQuantityFinal={setQuantityFinal}/>

                                                <div className='div_cart_summary_btn_eliminar'>
                                                    <button onClick={handleDeleteFromCart(item)}>Eliminar</button>
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
                                <h3>Envío: ¡GRATIS!</h3>
                            </div>
                            <div>
                                <h3>Productos: {quantityFinal}</h3>
                            </div>
                            <div>
                                <h3>Dirección: {user !== null ? `${user.address.street}, ${user.address.colonia}` : 'Dirección no disponible'}</h3>                            
                            </div>

                            <div className='div_btn_buy'>
                                {
                                    !session ? (
                                        <Link className='btn_buy' to={"/ProjectGymReact/Login"}>Proceder al pago</Link>
                                    ) : (
                                        <Link className='btn_buy' to={"/ProjectGymReact/CartSummary/CartCheckout"}>Proceder al pago</Link>
                                    )
                                }
            
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default CartSummary
