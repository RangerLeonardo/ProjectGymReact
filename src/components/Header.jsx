export const Header = ({ userName, userLastname }) => {
    return (
        <header>
            <section className="navegacion_principal">
                <div className="navegacion_logo navegacion_div">
                    <a href="#inicio">
                    <img id="logo" src="../src/assets/Logo.png" alt="logo" />
                    </a>
                </div>
                <div className="navegacion_div">
                    <a href="#inicio">
                        <p className="navegacion_p" id="inicio">Inicio</p>
                    </a>
                </div>
                <div className="navegacion_div">
                    <a href="#productos">
                        <p className="navegacion_p" id="sobre_mi">Productos</p>
                    </a>
                </div>
                <div className="navegacion_div">
                    <a href="#promociones">
                        <p className="navegacion_p" id="proyectos">Promociones</p>
                    </a>
                </div>
                <div className="navegacion_div">
                    <a href="#planesDeEntrenamiento">
                        <p className="navegacion_p">Planes de entrenamiento</p>
                    </a>
                </div>
                <div className="navegacion_div">
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
