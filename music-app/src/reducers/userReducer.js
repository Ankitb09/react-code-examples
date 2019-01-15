import { ADD_USER_DETAILS, ADD_SUSBCRIPTION, ADD_CC_DETAILS } from '../actions/actionTypes';

export const user = (state = {}, action) => {
    switch (action.type) {
        case ADD_USER_DETAILS:
            return {
                ...state,
                user: Object.assign({},action.userDetails)
            }
        default:
            return state;
    }
}