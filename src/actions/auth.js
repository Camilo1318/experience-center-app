
import { firebase } from '../firebase/fierabse-config'
import { types } from '../types/types';
import { logoutCleaningLentes } from './lentes';
import { removeError, setError } from './ui';

import Swal from 'sweetalert2'

export const startLoginWithEmailPasswordName = (email, passward) => {

    return (dispatch) => {

        firebase.auth().signInWithEmailAndPassword(email, passward)
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: 'User1' })

                dispatch(
                    login(user.uid, user.displayName)
                )

                console.log(user.uid);
            }).catch((error) => {
                console.log(error);
                if (error.code === 'auth/user-not-found') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Usuario no encontrado',
                        footer: '<a href>Comunicate con soporte para cualquier inquietud</a>',
                    })
                } else if (error.code === 'auth/wrong-password') {
                    dispatch(setError('Contraseña incorrecta'));
                } else {
                    dispatch(removeError());
                }
            });

    }

}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout());
        dispatch(logoutCleaningLentes());
    }
}

export const logout = () => ({
    type: types.authLogout,
})

export const login = (uid, displayName) => ({
    type: types.authLogin,
    payload: {
        uid,
        displayName
    }
})

