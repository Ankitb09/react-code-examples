import * as actionType from "./actionTypes";
import axiosInstance from "../api/axiosInstance";

export const fetchSelectedBook = () => ({
    type: actionType.FETCH_SELECTED_BOOK,
});

export const fetchSelectedBookSuccess = json => ({
    type: actionType.FETCH_SELECTED_BOOK_SUCCESS,
    payload: json.data
});

export const fetchSelectedBookFailure = error => ({
    type: actionType.FETCH_SELECTED_BOOK_ERROR,
    error
});

export const requestSelectedBook = (id) => {
    return async dispatch => {
        dispatch(fetchSelectedBook());
        try {
            const response = await axiosInstance.get(`/books/${id}`);
            dispatch(fetchSelectedBookSuccess(response));
        }   
        catch (err) {
            dispatch(fetchSelectedBookFailure(err))
        }
    };
}

