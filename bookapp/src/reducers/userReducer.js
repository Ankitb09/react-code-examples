import * as actionType from '../actions/actionTypes';

const initialState = {
    userId: '',
    isLoading: false,
    error: '',
    isAuthenticated: false,
    accessType: 'free'
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOGIN:
            return { ...state, isLoading: true };
        case actionType.LOGIN_SUCCESS:
            return { ...state, userId: action.payload, isLoading: false, isAuthenticated: true };
        case actionType.LOGIN_ERROR:
            return { ...state, error: action.error, isLoading: false, isAuthenticated: false };
        case actionType.USER_TYPE:
            return { ...state, isLoading: true };
        case actionType.USER_TYPE_SUCCESS:
            return { ...state, accessType: action.accessType, isLoading: false };
        case actionType.USER_TYPE_ERROR:
            return { ...state, error: action.error, isLoading: false };
        case actionType.USER_SUBSCRIBE:
            return { ...state, accessType: 'paid' }
        default:
            return state;
    }
}

export default userReducer;