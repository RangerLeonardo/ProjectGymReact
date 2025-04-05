import React, { useContext, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { CartShoppingContext } from './ContextAPI/ContextCart/CartShoppingContext';
import { SessionContext } from './ContextAPI/ContextSession/SessionContext';
import "../styles/Header.css";

const Header = ({ onFilterChange }) => {
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

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };


    return (
        <header>
            <div className="div_header_navegacion_principal">
                <section className="navegacion_principal">

                    {/* <!-- Logo --> */}
                    <div className="navegacion_logo navegacion_div" id="navegacion_logo_id">
                        <div>
                            <Link to={"/ProjectGymReact/"}>
                                <img id="logo" src="/ProjectGymReact/img/Logo.png" alt="logo" />
                            </Link>
                        </div>
                    </div>

                    {/* <!-- Ícono de menú hamburguesa para pantallas pequeñas --> */}
                    <div className="menu-icon" id="menu-icon" onClick={toggleMenu}>
                        <i className="fa fa-bars"></i>
                    </div>

                    {/* <!-- Menú de navegación --> */}
                    <div className={`div_column_navegacion ${menuActive ? 'active' : ''}`} id="nav-menu">
                        <div className="navegacion_div">
                            <Link onClick={handleFilter("")} className="navegacion_a" to={"/ProjectGymReact/"}>
                                <p className="navegacion_p" id="inicio">Todo</p>
                            </Link>
                        </div>
                        <div className="navegacion_div">
                            <Link onClick={handleFilter("proteina")} className="navegacion_a" to={"/ProjectGymReact/"}>
                                <p className="navegacion_p">Proteínas</p>
                            </Link>
                        </div>
                        <div className="navegacion_div">
                            <Link onClick={handleFilter("creatina")} className="navegacion_a" to={"/ProjectGymReact/"}>
                                <p className="navegacion_p">Creatinas</p>
                            </Link>
                        </div>
                        <div className="navegacion_div">
                            <Link onClick={handleFilter("suplementos")} className="navegacion_a" to={"/ProjectGymReact/"}>
                                <p id="navegacion_p_last_child" className="navegacion_p">Suplementos</p>
                            </Link>
                        </div>
                    </div>

                    {/* <!-- Botón de Iniciar/Cerrar Sesión --> */}
                    <div id="div_iniciar_sesion" className= {`${menuActive ? 'not_display_session' : ''}`}>
                        {
                            !session ? (
                                <div id='div_iniciar_sesion_id'>
                                    <Link onClick={handleLoginClick} to={"/ProjectGymReact/Login"} className="navegacion_p_iniciar_sesion">
                                        Iniciar sesión
                                    </Link>
                                </div>
                            ) : (
                                <div id='div_cerrar_sesion_id'>
                                    <Link onClick={handleLogoutClick} to={location.pathname} className="navegacion_p_iniciar_sesion">
                                        Cerrar sesión
                                    </Link>
                                </div>
                            )
                        }
                    </div>

                    {/* <!-- Carrito de Compras --> */}
                    <div className="navegacion_div div_column_shopping_cart">
                        <Link to={"/ProjectGymReact/CartSummary"}>
                            <div className='navegacion_p container_icon'>
                                <div className='container-cart-icon'>

                                    <i className="fa-solid fa-cart-shopping shopping_cart"></i>
                                        {quantityFinal > 0 && (
                                        <div className='count-products'>
                                            <span className="cart-quantity" id='contador-productos'>{quantityFinal}</span>
                                        </div>
                                        )}
                                </div> 
                            </div>
                        </Link>
                    </div>

                </section>
            </div>
        </header>

    );
}

export default Header