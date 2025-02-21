import React, { useState } from 'react';
import { postUser } from '../../firebase';

const Register = () => {
    const [formDataUser, setFormDataUser] = useState({
        name: '',
        last_name: '',
        email: '',
        password: '',
        addressToRef: '',
    });

    const [formDataAddress, setFormDataAddress] = useState({
        street: '',
        colonia: ''
    });

    const handleChangeDataUser = (e) => {
        const { name, value } = e.target;
        setFormDataUser({
            ...formDataUser,
            [name]: value
        });
    };

    const handleChangeDataAddress = (e) => {
        const { name, value } = e.target;
        setFormDataAddress({
            ...formDataAddress,
            [name]: value
        });
    };

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        const fullFormData = {
            ...formDataUser,
            addressToRef: { ...formDataAddress },
        };
        postUser(fullFormData);
    };

    return (
        <section>
            <form action="/ProjectGymReact" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombres">Nombre(s):</label>
                    <input
                        type="text"
                        id="nombres"
                        name="name"
                        value={formDataUser.name}
                        onChange={handleChangeDataUser}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="apellidos">Apellidos:</label>
                    <input
                        type="text"
                        id="apellidos"
                        name="last_name"
                        value={formDataUser.last_name}
                        onChange={handleChangeDataUser}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formDataUser.email}
                        onChange={handleChangeDataUser}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formDataUser.password}
                        onChange={handleChangeDataUser}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="calle">Calle:</label>
                    <input
                        type="text"
                        id="calle"
                        name="street"
                        value={formDataAddress.street}
                        onChange={handleChangeDataAddress}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="colonia">Colonia:</label>
                    <input
                        type="text"
                        id="colonia"
                        name="colonia"
                        value={formDataAddress.colonia}
                        onChange={handleChangeDataAddress}
                        required
                    />
                </div>
                <button type="submit">Registrar</button>
            </form>
        </section>
    );
};

export default Register;
