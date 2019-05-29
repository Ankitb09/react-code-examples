import * as actionType from './actionTypes';
import axiosInstance from '../api/axiosInstance';

export const fetchCategories = () => ({ type: actionType.FETCH_CATEGORIES, });

export const fetchCategoriesSuccess = (json) => {
    console.log(json);
    return {
        type: actionType.FETCH_CATEGORIES_SUCCESS,
        payload: json.data.categories,
        selectedCategory: json.data.categories[0].id
    }
};

export const fetchCategoriesFailure = (error) => ({ type: actionType.FETCH_CATEGORIES_ERROR, error });

export const fetchBooks = () => ({ type: actionType.FETCH_BOOKLIST });

export const fetchBooksSuccess = (json) => {
    console.log(json);
    return {
        type: actionType.FETCH_BOOKLIST_SUCCESS,
        payload: json,
    }
};

export const fetchBooksFailure = (error) => ({
    type: actionType.FETCH_BOOKLIST_ERROR,
    error
});

export const selectCategory = (id) => ({
    type: actionType.SELECT_CATEGORY,
    id
});

export const requestCategories = () => dispatch => {
    dispatch(fetchCategories());
    return axiosInstance
        .get('/categories')
        .then(response => {
            dispatch(fetchCategoriesSuccess(response))
        })
        .catch(err => dispatch(fetchCategoriesFailure(err)));
};

export const requestBookList = () => dispatch => {
    dispatch(fetchBooks());
    return axiosInstance
        .get('/books')
        .then(response => {
            let normalisedObj = {};
            response.data.books.forEach((ele) => {
                normalisedObj[ele.id] = ele
            });
            dispatch(fetchBooksSuccess(normalisedObj))
        })
        .catch(err => dispatch(fetchBooksFailure(err)));
};
