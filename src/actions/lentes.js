import { db } from '../firebase/fierabse-config'
import { types } from '../types/types';
import Swal from 'sweetalert2'
// Actions asincronas---------------------------------------------------------------

export const startAddNewLente = (newLente) => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        const { lentes } = getState().lentes

        try {

            const doc = await db.collection(`/${uid}/Panel/lentes`).add(newLente);

            lentes.push({
                id: doc.id,
                ...newLente
            })

            dispatch(activeLente(doc.id, newLente))

            dispatch(setLentes(lentes))
        } catch (error) {
            console.log(error)
        }


    }
}

export const startLoadingLentes = (uid) => {
    return async (dispatch) => {

        const lentes = [];

        await db.collection(`${uid}/Panel/lentes`).get().then(snapHijo => {

            snapHijo.forEach(data => {

                lentes.push({
                    id: data.id,
                    ...data.data()
                })
            })
        })
        dispatch(setLentes(lentes))
    }
}

/* export const startDeleteAllLentes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        Swal.fire({
            title: 'Estas a punto de Eliminar todos los lentes!',
            text: "No podrás deshacer los cambios!, asegurate de tener un respaldo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {

                try {

                    const doc = db.collection(uid).doc('Panel').collection('lentes').get()
                        .then(resp => {
                            resp.forEach(item => {

                            })

                        }
                        )

                    const newLentes = [];

                    dispatch(deleteAllLentes(newLentes));

                    Swal.fire(
                        'Eliminado!',
                        'Lentes Eliminados.',
                        'success'
                    )

                } catch (error) {
                    console.log(error)
                }


            }
        })


    }
} */

export const startDeleteLente = (id) => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        const { lentes } = getState().lentes

        Swal.fire({
            title: 'Estas seguro?',
            text: "No podrás deshacer los cambios!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminarlo!'
        }).then((result) => {
            if (result.isConfirmed) {

                try {
                    db.collection(uid).doc(`Panel/lentes/${id}`).delete();
                    Swal.fire(
                        'Eliminado!',
                        'Lente eliminador del inventario.',
                        'success'
                    )

                } catch (error) {
                    console.log(error)
                }

                const newLentes = lentes.filter(lente => lente.id !== id);

                dispatch(deleteLente(newLentes));
            }
        })
    }
}

export const startUpdateLente = (updateLente) => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        const { lentes } = getState().lentes
        const { idEditing } = getState().lentes

        Swal.fire({
            title: 'Estas seguro?',
            text: "No podrás deshacer los cambios!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Actualizar!'
        }).then((result) => {

            if (result.isConfirmed) {

                const lenteRef = db.collection(`${uid}`).doc(`Panel/lentes/${idEditing}`);

                lenteRef.update({
                    id: idEditing,
                    ...updateLente
                });
                Swal.fire(
                    'Completado!',
                    'Lente actualizado del inventario.',
                    'success'
                )

                lentes.map((lente, index) => {
                    if (lente.id === idEditing) {
                        lentes.splice(index, 1, {
                            id: idEditing,
                            ...updateLente
                        })
                    }
                })

                dispatch(editingLente(false))
            }

        })
    }
}

// Actions sincronas -----------------------------------------------------------------------

export const activeLente = (id, newLente) => ({
    type: types.lentesActive,
    payload: {
        id,
        ...newLente
    }
})

export const desactiveLente = () => ({
    type: types.lentesDesactive
})

export const setLentes = (lentes) => ({

    type: types.lentesLoad,
    payload: lentes
});

export const deleteLente = (newLentes) => ({
    type: types.lentesDelete,
    payload: newLentes
})

export const deleteAllLentes = () => ({
    type: types.lentesDeleteAllLentes,
})

export const logoutCleaningLentes = () => ({
    type: types.lentesLogoutCleaning,
})

export const editingLente = (state) => ({
    type: types.lentesEditing,
    payload: state
})