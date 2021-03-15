import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoginWithEmailPasswordName } from '../../actions/auth'
import validador from 'validator'

import useForm from '../../hooks/useForm'
import '../../styles/LoginScreen.css'
import { removeError, setError } from '../../actions/ui'



export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        email: 'centro_experiencia_2021@hotmail.com',
        password: '1234567',
        username: 'Centro Experiencia'
    })

    const { email, password, username } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        if (isFormValid()) {

            dispatch(startLoginWithEmailPasswordName(email, password, username))
        }
    }

    const isFormValid = () => {
        if (!validador.isEmail(email)) {
            dispatch(setError('Email invalido'))
            return false;
        } else if (password.length < 5) {
            dispatch(setError('Contraseña invalida'))
            return false;
        } else if (username.length < 3) {
            dispatch(setError('Usuario invalido'))
            return false;
        }

        dispatch(removeError());
        return true;
    }

    return (
        <>
            <div className="" id="background">
                <div
                    className="row justify-content-center align-items-center"
                    style={{ height: "100vh" }}
                >
                    <div className="col-4">
                        <div className="card border-info">
                            <h2 className="card-title text-center mt-4">Iniciar Sesion</h2>
                            <div className="card-body">

                                {
                                    (msgError) &&
                                    (<span class="badge badge-danger w-100 mb-2">{msgError}</span>)

                                }


                                <form >
                                    <div className="form-group">

                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={handleInputChange} />

                                    </div>
                                    <div className="form-group">

                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={handleInputChange} />

                                    </div>

                                    <div className="form-group">

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            placeholder="Nombre de Usuario"
                                            value={username}
                                            onChange={handleInputChange} />

                                    </div>
                                    <button type="button" className="btn btn-dark w-100" onClick={handleLogin}>login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
