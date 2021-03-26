import { types } from "../types/types";

const initialState = {
    msgError: null,
    resetForm: false
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetError:

            return {
                ...state,
                msgError: action.payload
            }

        case types.uiRemoveError:

            return {
                ...state,
                msgError: null
            }
        case types.uiResetFormLente:
            return {
                ...state,
                resetForm: action.payload
            }
        default:
            return state;
    }
}