const Header = () => {
    return (
        <header>
            <section className="navegacion_principal">
                <div className="navegacion_logo navegacion_div">
                    <a href="#inicio">
                    <img id="logo" src="/Logo.png" alt="logo" />
                    </a>
                </div>

                {/* This one start the union */}
                <div className="div_column_navegacion">
                    <div className="navegacion_div">
                        <a className="navegacion_a" href="#todo">
                            <p className="navegacion_p" id="inicio">Todo</p>
                        </a>
                    </div>
                    <div className="navegacion_div">
                        <a className="navegacion_a" href="#proteina">
                            <p className="navegacion_p" id="sobre_mi">Proteínas</p>
                        </a>
                    </div>
                    <div className="navegacion_div">
                        <a className="navegacion_a" href="#creatina">
                            <p className="navegacion_p" id="proyectos">Creatinas</p>
                        </a>
                    </div>
                    <div className="navegacion_div">
                        <a className="navegacion_a" href="#preentreno">
                            <p className="navegacion_p">Pre entreno</p>
                        </a>
                    </div>
                    <div className="navegacion_div">
                        <a className="navegacion_a" href="#suplementos">
                            <p className="navegacion_p">Suplementos y otros</p>
                        </a>
                    </div>
                </div>
                {/* This one end the union */}
                <div className="navegacion_div div_column_shopping_cart">
                    <a href="#carritoDeCompras">
                        <p className="navegacion_p">
                        <i className="fa-solid fa-cart-shopping"></i>
                        </p>
                    </a>
                </div>
            </section>
        </header>
    );
}

export default Header
