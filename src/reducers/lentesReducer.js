import { types } from '../types/types'


const initialState = {
    lentes: [],
    active: null
}

export const lentesReducer = (state = initialState, action) => {
    switch (action.type) {

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


        default:
            return state;
    }
}