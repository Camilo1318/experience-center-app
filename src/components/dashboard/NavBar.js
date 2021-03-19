import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth';

export const NavBar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout())

    }
    return (
        <>
            <div>

                <div className="navbar-collapse">
                    <Link
                        className="navbar-brand"
                        to="/"
                    >
                        Experience Center
                    </Link>


                </div>
            </div>

            <div>
                <div className="navbar-collapse collapse w-100 order-3">
                    <ul className="navbar-nav ml-auto">

                        <div className="navbar-nav">


                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/catalog"
                            >
                                Catalog
                    </NavLink>

                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/create-product"
                            >
                                Create Component
                            </NavLink>

                        </div>

                        <span className="nav-item nav-link text-info">
                            { }
                        </span>
                        <button
                            className="nav-item nav-link btn"
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
