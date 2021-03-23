import { db, storage } from '../firebase/fierabse-config'
import { types } from '../types/types';

// Actions asincronas---------------------------------------------------------------

export const startAddNewLente = (newLente, fileImage, fileMarca) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { lentes } = getState().lentes

        const doc = await db.collection(`${uid}/Panel/lentes`).add(newLente);

        const ImageRef = storage.ref().child(`${uid}/${doc.id}/${fileImage.name}`);
        const MarcaRef = storage.ref().child(`${uid}/${doc.id}/${fileMarca.name}`);

        await ImageRef.put(fileImage);
        await MarcaRef.put(fileMarca);

        const urlImage = await ImageRef.getDownloadURL();
        const urlMarca = await MarcaRef.getDownloadURL();

        await db.collection(uid).doc(`Panel/lentes/${doc.id}`).update({
            urlImage: urlImage,
            urlMarca: urlMarca
        })

        newLente.urlImage = urlImage;
        newLente.urlMarca = urlMarca;

        lentes.push({
            id: doc.id,
            ...newLente
        })
        console.log(lentes)

        dispatch(setLentes(lentes))
        dispatch(activeLente(doc.id, newLente))

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

export const startDeleteLente = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { lentes } = getState().lentes

        const ImageRef = storage.ref().child(`${uid}/${id}`);

        // Now we get the references of these files
        ImageRef.listAll().then(result => {
            result.items.forEach(file => {
                file.delete();
            });
        }).catch(function (error) {
            console.log('No se pudo eliminar los archivos')
        });

        try {
            await db.collection(uid).doc(`Panel/lentes/${id}`).delete();

        } catch (error) {
            console.log(error)
        }

        const newLentes = lentes.filter(lente => lente.id !== id);

        dispatch(deleteLente(newLentes));
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

export const logoutCleaningLentes = () => ({
    type: types.lentesLogoutCleaning,
})