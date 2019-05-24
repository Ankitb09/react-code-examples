import * as actionType from './actionTypes';
import axiosInstance from '../api/axiosInstance';

export const login = () => ({
    type: actionType.LOGIN,
});

export const loginSuccess = (json) => {
    console.log(json);
    return {
        type: actionType.LOGIN_SUCCESS,
        payload: json.data
    }
};

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
