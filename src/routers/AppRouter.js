import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'

import { login } from '../actions/auth'
import { startLoadingLentes } from '../actions/lentes'
import { LoginScreen } from '../components/auth/LoginScreen'
import { DashBoardRoutes } from './DashBoardRoutes'

import { PublicRoute } from '../routers/PublicRoute'
import { PrivateRoute } from '../routers/PrivateRoute'

import { firebase } from '../firebase/fierabse-config'

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                dispatch(startLoadingLentes(user.uid))

            } else {
                setIsLoggedIn(false);
            }
        })

    }, [dispatch])

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute
                        exact
                        path="/login"
                        isAutenticated={isLoggedIn}
                        component={LoginScreen}
                    />

                    <PrivateRoute
                        path="/"
                        isAutenticated={isLoggedIn}
                        component={DashBoardRoutes}
                    />

                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    )
}


