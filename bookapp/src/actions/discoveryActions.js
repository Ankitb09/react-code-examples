import * as actionType from './actionTypes';
import axiosInstance from '../api/axiosInstance';

export const FetchCategories = () => ({
    type: actionType.FETCH_CATEGORIES,
});

export const FetchCategoriesSuccess = (json) => {
    console.log(json);
    return {
        type: actionType.FETCH_CATEGORIES_SUCCESS,
        payload: json.data
    }
};

export const FetchCategoriesFailure = (error) => ({
    type: actionType.FETCH_CATEGORIES_ERROR,
    error
});

export const requestCategories = () => dispatch => {
    dispatch(FetchCategories());
    return axiosInstance
        .get('/category')
        .then(response => {
            
            
        })
        .catch(err => dispatch(FetchCategoriesFailure(err)));
};
