import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { SessionContext } from '../ContextAPI/ContextSession/SessionContext';

const Login = ( fromSomewhere) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(SessionContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginSuccessful = await login(email, password);
        if (!loginSuccessful) {
            alert('Usuario o contraseña incorrectos');
        } else {
            const path = localStorage.getItem("preLocation");
            const from = path !== null ?  path : '/ProjectGymReact/';
            navigate(from, { replace: true });
        }
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Iniciar sesión</button>
                <div>
                    <p>¿No tienes una cuenta? <Link to="/ProjectGymReact/Register">Regístrate aquí</Link></p>
                    <button type="button">Recuperar contraseña</button>
                </div>
            </form>
        </section>
    );
};

export default Login;
