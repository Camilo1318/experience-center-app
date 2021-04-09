import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth';

export const NavBar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout())

    }
    return (
        <>
            <div>

                <div className="navbar-nav">
                    <NavLink
                        className="navbar-brand"
                        to="/"
                    >
                        Centro de Experiencia
                    </NavLink>


                </div>
            </div>

            <div>
                <div className=" w-100 order-3">
                    <ul className="navbar-nav ml-auto">

                        <div className="navbar-nav">

                            <NavLink

                                className="nav-item nav-link"
                                to="/catalog"
                            >
                                Catalogo
                            </NavLink>
                            <NavLink

                                className="nav-item nav-link"
                                to="/create-product"
                            >
                                Crear Lente
                            </NavLink>


                        </div>

                        <button
                            className="nav-item nav-link btn btn-light text-dark btn-sm"
                            onClick={handleLogout}
                        >
                            Logout
                    </button>
                    </ul>
                </div>
            </div>
        </>
    )
}
