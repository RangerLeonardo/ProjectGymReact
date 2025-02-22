import React, { useContext, useState } from 'react';
import CartShoppingContext from '../ContextAPI/ContextCart/CartShoppingContext';
import { SessionContext } from '../ContextAPI/ContextSession/SessionContext';
import '../../styles/cartCheckout.css'; 
const CartCheckout = () => {
    const { cartShopping, setCartShopping, setQuantityFinal } = useContext(CartShoppingContext);
    const { user } = useContext(SessionContext);
    const [compraExitosa, setCompraExitosa] = useState(false);

    // Calcular total de artículos y precio total
    const totalArticulos = cartShopping.reduce((sum, item) => sum + item.quantity, 0);
    const totalCompra = cartShopping.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Manejar la compra
    const handleComprar = () => {
        setCartShopping([]);
        setQuantityFinal(0);
        setCompraExitosa(true);
    };

    return (
        <section className='view_default'>
            <div className="checkout-container">
                {compraExitosa ? (
                    <div className="success-message">
                        <h2>Compra exitosa</h2>
                        <p>Te enviamos un código para proceder</p>
                    </div>
                ) : (
                    <div className="checkout-summary">
                        <h2>Resumen de tu compra</h2>
                        <div className="user-info">
                            <p><strong>Nombre:</strong> {user.name} {user.lastname}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Dirección de envío:</strong> {user.address ? `${user.address.street}, ${user.address.colonia}` : 'No disponible'}</p>
                        </div>
                        <div className="order-info">
                            <p><strong>Total de artículos:</strong> {totalArticulos}</p>
                            <p><strong>Total de la compra:</strong> ${totalCompra.toFixed(2)}</p>
                        </div>
                        <button className="buy-button" onClick={handleComprar}>Comprar</button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CartCheckout;
