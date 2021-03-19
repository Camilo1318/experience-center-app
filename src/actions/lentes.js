import { db, storage } from '../firebase/fierabse-config'
import { types } from '../types/types';

// Actions asincronas---------------------------------------------------------------

export const startAddNewLente = (newLente) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { lentes } = getState().lentes

        const doc = await db.collection(`${uid}/Panel/lentes`).add(newLente);

        lentes.push({
            id: doc.id,
            ...newLente
        })
        console.log(lentes)

        dispatch(setLentes(lentes))
        dispatch(activeLente(doc.id, newLente))

    }
}

export const startUploadImageFirebase = (File) => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        const ImageRef = storage.ref().child(`${uid}/${File.name}`);

        await ImageRef.put(File)
            .then(() => {
                ImageRef.getDownloadURL().then(downloadURL => {
                    console.log(downloadURL)
                    dispatch(UpdateUrlImage(downloadURL))
                })
            })
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

export const UpdateUrlImage = (url) => ({
    type: types.lentesFileUrl,

})