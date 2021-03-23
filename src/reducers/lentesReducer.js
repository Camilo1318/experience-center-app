import { types } from '../types/types'


const initialState = {
    lentes: [],
    active: null
}

export const lentesReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.lentesDesactive:

            return {
                ...state,
                active: null
            }

        case types.lentesActive:

            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.lentesLoad:

            return {
                ...state,
                lentes: [...action.payload]
            }
        case types.lentesDelete:
            return {
                ...state,
                active: null,
                lentes: [...action.payload]
            }
        default:
            return state;
    }
}