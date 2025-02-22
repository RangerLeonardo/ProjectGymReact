import React, { useState } from 'react';
import { postUser } from '../../firebase';
import "../../styles/register.css"

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
        <section className='view_default'>
            <div className='section_title_login'>
                <h2>Crea una cuenta en REAL MAN</h2>
            </div>

            <div className='section_principal_register'>

                <div className='div_principal_register'>
                    <div className='div_title_register_form'>
                        <h2>Crear cuenta</h2>
                    </div>
                    <div className='div_form_register'>
                        <form action="/ProjectGymReact" onSubmit={handleSubmit} className='form_register'>
                            <div className='div_login_label_input'>

                                <div>

                                    <label htmlFor="nombres">Nombre(s)</label>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        id="nombres"
                                        name="name"
                                        value={formDataUser.name}
                                        onChange={handleChangeDataUser}
                                        required
                                        className='input_login'
                                    />
                                </div>

                            </div>
                            <div className='div_login_label_input'>

                                <div>

                                    <label htmlFor="apellidos">Apellidos</label>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        id="apellidos"
                                        name="last_name"
                                        value={formDataUser.last_name}
                                        onChange={handleChangeDataUser}
                                        required
                                        className='input_login'
                                    />
                                </div>

                            </div>
                            <div className='div_login_label_input'>

                                <div>

                                    <label htmlFor="email">Email</label>
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formDataUser.email}
                                        onChange={handleChangeDataUser}
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
                                        value={formDataUser.password}
                                        onChange={handleChangeDataUser}
                                        required
                                        className='input_login'
                                    />
                                </div>

                            </div>

                            <div className='div_title_direccion'>
                                <h3>Dirección de envío</h3>
                            </div>

                            <div className='div_login_label_input'>

                                <div>
                                    <label htmlFor="calle">Calle y número</label>

                                </div>

                                <div>
                                    <input
                                        type="text"
                                        id="calle"
                                        name="street"
                                        value={formDataAddress.street}
                                        onChange={handleChangeDataAddress}
                                        required
                                        className='input_login'
                                    />
                                </div>

                            </div>
                            <div className='div_login_label_input'>

                                <div>

                                    <label htmlFor="colonia">Colonia</label>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        id="colonia"
                                        name="colonia"
                                        value={formDataAddress.colonia}
                                        onChange={handleChangeDataAddress}
                                        required
                                        className='input_login'
                                    />
                                </div>

                            </div>
                            <div className='div_btn_crear_cuenta'>
                                <button className='btn_crear_cuenta btn_hover_generic_white' type="submit">Crear cuenta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
