import { FETCH_LIST, FETCH_DETAILS } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_DETAILS:
            const details = action.payload.data;
            const newState = { ...state };
            newState[details.id] = details;
            return newState;

        case FETCH_LIST:
            return action.payload.data;
        default:
            return state;
    }
}