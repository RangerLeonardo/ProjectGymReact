import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { SessionContext } from '../ContextAPI/ContextSession/SessionContext';
import '../../styles/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(SessionContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginSuccessful = await login(email, password);
        if (!loginSuccessful) {
            alert('Usuario o contraseña incorrectos');
        } else {
            const path = localStorage.getItem("preLocation");
            const from = path !== null ? path : '/ProjectGymReact/';
            navigate(from, { replace: true });
        }
    };

    return (
        <section className='view_default'>
            <div className='section_title_login'>
                <h2>Inicia sesión en REAL MAN o registrate con nosotros</h2>
            </div>
            <div className='section_principal_login'>
                <div className='div_principal_login'>

                    <div className='div_login_title'>
                        <h2>Iniciar sesión</h2>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className='div_login_label_input'>
                            <div>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className='input_login'
                                />
                            </div>
                        </div>

                        <div className='div_login_label_input'>
                            <div>
                                <label htmlFor="password">Contraseña</label>
                            </div>
                            <div>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className='input_login'
                                />
                            </div>
                        </div>

                        <div className='div_btn_iniciar_sesion'>
                            <button type="submit" className='btn_iniciar_sesion btn_hover_generic_white'>Entrar</button>
                        </div>
                        <div className='div_login_register_or_recover'>
                            <p>¿No tienes una cuenta? <Link to="/ProjectGymReact/Register">Regístrate aquí</Link></p>
                            <button type="button">Recuperar contraseña</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
