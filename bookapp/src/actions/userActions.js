import * as actionType from './actionTypes';
import axiosInstance from '../api/axiosInstance';

export const login = () => ({
    type: actionType.LOGIN,
});

export const loginSuccess = (json) => ({
    type: actionType.LOGIN_SUCCESS,
    payload: json.data
});

export const loginFailure = (error) => ({
    type: actionType.LOGIN_ERROR,
    error
});

export const requestLogin = () => dispatch => {
    dispatch(login());
    return axiosInstance
        .post('/auth')
        .then(response => dispatch(loginSuccess(response)))
        .catch(err => dispatch(loginFailure(err)));
};

export const userType = () => ({
    type: actionType.USER_TYPE,
});

export const userTypeSuccess = (json) => {
    console.log(json);
    return {
        type: actionType.USER_TYPE_SUCCESS,
        accessType: json.data.access_type
    }
};

export const userTypeFailure = (error) => ({
    type: actionType.USER_TYPE_ERROR,
    error
});

export const getUserType = () => dispatch => {
    dispatch(userType());
    return axiosInstance
        .get('/me')
        .then(json => dispatch(userTypeSuccess(json)))
        .catch(err => dispatch(userTypeFailure(err)));
};

export const subscribeUser = () => ({
    type: actionType.USER_SUBSCRIBE,
})
