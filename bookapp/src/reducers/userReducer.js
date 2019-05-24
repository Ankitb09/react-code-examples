import * as actionType from '../actions/actionTypes';

const intialState = {
    userId: '',
    isLoading: false,
    error: ''
};

const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionType.LOGIN:
            return { ...state, isLoading: true };
        case actionType.LOGIN_SUCCESS:
            return { ...state, userId: action.payload.user_id, isLoading: false , isAuthenticated: true};
        case actionType.LOGIN_ERROR:
            return { ...state, error: action.error, isLoading: false , isAuthenticated: false};
        default:
            return state;
    }
}

export default userReducer;