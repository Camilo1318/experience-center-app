
import { firebase } from '../firebase/fierabse-config'
import { types } from '../types/types';

export const startLoginWithEmailPasswordName = (email, passward, name) => {

    return (dispatch) => {

        firebase.auth().signInWithEmailAndPassword(email, passward)
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: name })

                dispatch(
                    login(user.uid, user.displayName)
                )

                console.log(user.uid);
            }).catch((err) => {

            });

    }

}

export const login = (uid, displayName) => ({
    type: types.authLogin,
    payload: {
        uid,
        displayName
    }
})

