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
import Swal from 'sweetalert2'

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        const getUserRef = userId => firebase.database().ref(`/users/${userId}`);

        const ensureUserSession = async userId => {
            const userRef = getUserRef(userId);

            return userRef.once('value').then(snapshot => {
                if (!snapshot.exists()) {
                    return userRef.set({
                        last_seen: firebase.database.ServerValue.TIMESTAMP
                    });
                }

                const user = snapshot.val();

                if (user.is_online) {
                    throw new Error('Sesion Existente');
                }

                return Promise.resolve();
            });
        };

        firebase.auth().onAuthStateChanged(async (user) => {

            if (user) {
                return ensureUserSession(user.uid)
                    .then(async () => {

                        const userRef = getUserRef(user.uid);

                        dispatch(login(user.uid, user.displayName));
                        setIsLoggedIn(true);

                        dispatch(startLoadingLentes(user.uid))


                        return userRef
                            .onDisconnect()
                            .set({
                                is_online: false,
                                last_seen: firebase.database.ServerValue.TIMESTAMP
                            }).then(() =>
                                userRef.set({
                                    is_online: true,
                                    last_seen: firebase.database.ServerValue.TIMESTAMP
                                })
                            );


                    }).catch(err => {
                        console.error(err);

                        if (err instanceof Error) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Sesion Activa',
                                text: 'Asegurate de cerrar todas tus sesiones (Incluidas pestañas) si el error persiste recarga tu navegador'
                            })
                            return firebase.auth().signOut();
                        }


                    });



            }
            else {
                setIsLoggedIn(false);
            }
        });

    }, [dispatch])



    useEffect(() => {

    }, [])

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


