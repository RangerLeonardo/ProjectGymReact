import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, autenticar al usuario
        console.log('Email:', email);
        console.log('Password:', password);
        // Redirigir a la página principal después de iniciar sesión (ajusta la ruta según tu aplicación)
        // history.push('/ProjectGymReact');
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
