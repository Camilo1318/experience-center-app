import { types } from "../types/types"

export const setError = (err) => ({
    type: types.uiSetError,
    payload: err
})

export const removeError = () => ({
    type: types.uiRemoveError
})

export const resetFormLente = (state) => ({
    type: types.uiResetFormLente,
    payload: state
})

export const setShowHideModal = (state) => ({
    type: types.uiModalState,
    payload: state
})
