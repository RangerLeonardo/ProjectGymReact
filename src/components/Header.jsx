import React, { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import { CartShoppingContext } from './ContextAPI/ContextCart/CartShoppingContext';
import { SessionContext } from './ContextAPI/ContextSession/SessionContext';
import {filterProducts} from '../firebase';
import "../styles/Header.css";

const Header = ( { onFilterChange } ) => {
    const { quantityFinal } = useContext(CartShoppingContext);
    const { session, logout } = useContext(SessionContext);
    const location = useLocation();
    const handleLoginClick = () => {
        localStorage.setItem("preLocation", location.pathname);
    };
    const handleLogoutClick = () => {
        logout();
    };

    const handleFilter = (filterValue) => () => {
        onFilterChange(filterValue);
    };

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
                            <Link onClick={handleFilter("")} className="navegacion_a" to={"/ProjectGymReact/"}>
                                <p className="navegacion_p" id="inicio">Todo</p>
                            </Link>
                        </div>
                        <div className="navegacion_div">
                            <Link onClick={handleFilter("proteina")} className="navegacion_a" to={"/ProjectGymReact/"}>
                                <p className="navegacion_p" id="sobre_mi">Proteínas</p>
                            </Link>
                        </div>
                        <div className="navegacion_div">
                            <Link onClick={handleFilter("creatina")} className="navegacion_a" to={"/ProjectGymReact/"}>
                                <p className="navegacion_p" id="proyectos">Creatinas</p>
                            </Link>
                        </div>
                        {/* Se me olvidó subir los pre entreno a la db jaja */}
                        {/* <div className="navegacion_div">
                            <Link onClick={handleFilter("preentreno")} className="navegacion_a" to={"/ProjectGymReact/"}>
                                <p className="navegacion_p">Pre entreno</p>
                            </Link>
                        </div> */}
                        <div className="navegacion_div">
                            <Link onClick={handleFilter("suplementos")} className="navegacion_a" to={"/ProjectGymReact/"}>
                                <p id="navegacion_p_last_child" className="navegacion_p">Suplementos y otros</p>
                            </Link>
                        </div>
                    </div>
                    {/* This one end the union */}
                    <div className="navegacion_div div_column_iniciar_sesion_registro">
                        {
                            !session ? (
                                <Link onClick={handleLoginClick} to={"/ProjectGymReact/Login"}>
                                    <p className="navegacion_p">Iniciar sesión</p>
                                </Link>
                            ) : (
                                <Link onClick={handleLogoutClick} to={location.pathname}>
                                <p className="navegacion_p">Cerrar sesión</p>
                                </Link>
                            )
                        }

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