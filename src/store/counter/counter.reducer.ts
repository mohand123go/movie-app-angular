import { INCREASE_COUNTER } from "./counter.actions";

const INITAIL_STATE = {

    countervalue: 0

}

export function counterReducer(state = INITAIL_STATE, action) {

    switch (action.type) {
        case INCREASE_COUNTER:

            return {
                ...state,
                countervalue: action.payload
            }
        default:
            return state
    }
}