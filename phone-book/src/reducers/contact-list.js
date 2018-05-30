import { FETCH_LIST } from '../actions';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_LIST:
            return action.payload.data;
        default:
            return state;
    }
}