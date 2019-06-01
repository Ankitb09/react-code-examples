import * as actionType from "./actionTypes";
import axiosInstance from "../api/axiosInstance";

export const fetchCategories = () => ({ type: actionType.FETCH_CATEGORIES });

export const fetchCategoriesSuccess = json => ({
    type: actionType.FETCH_CATEGORIES_SUCCESS,
    payload: json.data.categories,
    selectedCategory: json.data.categories[0].id
});

export const fetchCategoriesFailure = error => ({
    type: actionType.FETCH_CATEGORIES_ERROR,
    error
});

export const fetchBooks = () => ({ type: actionType.FETCH_BOOKLIST });

export const fetchBooksSuccess = json => ({
    type: actionType.FETCH_BOOKLIST_SUCCESS,
    payload: json
});

export const fetchBooksFailure = error => ({
    type: actionType.FETCH_BOOKLIST_ERROR,
    error
});

export const selectCategory = id => ({
    type: actionType.SELECT_CATEGORY,
    id
});

export const requestCategories = () => {
    return async dispatch => {
        dispatch(fetchCategories());
        try {
            const response = await axiosInstance.get("/categories");
            dispatch(fetchCategoriesSuccess(response));
        }   
        catch (err) {
            dispatch(fetchCategoriesFailure(err))
        }
    };
}

export const requestBookList = () => {
    return async dispatch => {
        dispatch(fetchBooks());
        try {
            const response = await axiosInstance.get("/books");
            let normalisedObj = {};
            response.data.books.forEach(ele => {
                normalisedObj[ele.id] = ele;
            });
            dispatch(fetchBooksSuccess(normalisedObj));
        }   
        catch (err) {
            dispatch(fetchBooksFailure(err))
        }
    };
}

