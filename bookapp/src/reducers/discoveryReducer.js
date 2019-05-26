import * as actionType from '../actions/actionTypes';

const intitalState = {
    categories: [],
    bookList: {},
    selectedCategory: "",
    selectedBook: "",
    error: "",
    isLoading: false
}


const discoveryReducer = (state = intitalState, action) => {
    switch (action.type) {
        case actionType.FETCH_BOOKLIST:
            return { ...state, isLoading: true };
        case actionType.FETCH_BOOKLIST_SUCCESS:
            return { ...state, bookList: action.payload, isLoading: false }
        case actionType.FETCH_BOOKLIST_ERROR:
            return { ...state, error: action.error, isLoading: false }
        case actionType.FETCH_CATEGORIES:
            return { ...state, isLoading: true };
        case actionType.FETCH_CATEGORIES_SUCCESS:
            return { ...state, categories: action.payload, isLoading: false, selectedCategory: action.selectedCategory }
        case actionType.FETCH_CATEGORIES_ERROR:
            return { ...state, error: action.error, isLoading: false }
        case actionType.SELECT_CATEGORY:
            return { ...state, selectedCategory: action.id }
        default:
            return state;
    }
}

export default discoveryReducer;