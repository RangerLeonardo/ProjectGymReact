import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartShoppingContext } from './ContextAPI/ContextCart/CartShoppingContext';
import "../styles/Header.css";

const Header = () => {
    const { quantityFinal } = useContext(CartShoppingContext);

    return (
        <header>
            <div className="div_header_navegacion_principal">
                <section className="navegacion_principal">
                    <div className="navegacion_logo navegacion_div">
                        <Link to={"/ProjectGymReact/"}> 
                            <img id="logo" src="/ProjectGymReact/img/Logo.png" alt="logo" />
                        </Link>
                    </div>

                    {/* This one start the union */}
                    <div className="div_column_navegacion">
                        <div className="navegacion_div">
                            <Link className="navegacion_a" to={"/ProjectGymReact/"}>
                                <p className="navegacion_p" id="inicio">Todo</p>
                            </Link>
                        </div>
                        <div className="navegacion_div">
                            <a className="navegacion_a" href="">
                                <p className="navegacion_p" id="sobre_mi">Proteínas</p>
                            </a>
                        </div>
                        <div className="navegacion_div">
                            <a className="navegacion_a" href="">
                                <p className="navegacion_p" id="proyectos">Creatinas</p>
                            </a>
                        </div>
                        <div className="navegacion_div">
                            <a className="navegacion_a" href="">
                                <p className="navegacion_p">Pre entreno</p>
                            </a>
                        </div>
                        <div className="navegacion_div">
                            <a className="navegacion_a" href="">
                                <p id="navegacion_p_last_child" className="navegacion_p">Suplementos y otros</p>
                            </a>
                        </div>
                    </div>
                    {/* This one end the union */}
                    <div className="navegacion_div div_column_iniciar_sesion_registro">
                        <Link to={"/ProjectGymReact/Login"}>
                            <p className="navegacion_p">
                            Iniciar sesión
                            </p>
                        </Link>
                    </div>
                    <div className="navegacion_div div_column_shopping_cart">
                        <Link to={"/ProjectGymReact/CartSummary"}>
                            <p className="navegacion_p">
                            <i className="fa-solid fa-cart-shopping shopping_cart"></i>
                            {quantityFinal > 0 && (
                            <span className="cart_count">{quantityFinal}</span>
                            )}
                            </p>
                        </Link>
                    </div>
                </section>
            </div>
        </header>
    );
}

export default Header