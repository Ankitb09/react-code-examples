import * as actionType from "../actions/actionTypes";

const initialState = {
  categories: [],
  bookList: {},
  selectedCategory: "",
  error: {},
  isLoading: 0
};

const discoveryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_BOOKLIST:
      return { ...state, isLoading: state.isLoading + 1 };
    case actionType.FETCH_BOOKLIST_SUCCESS:
      return {
        ...state,
        bookList: action.payload,
        isLoading: state.isLoading - 1,
        error: { ...state.error, booklisterr: {} },
      };
    case actionType.FETCH_BOOKLIST_ERROR:
      return {
        ...state,
        error: { ...state.error, booklisterr: action.error },
        isLoading: state.isLoading - 1
      };

    case actionType.FETCH_CATEGORIES:
      return { ...state, isLoading: state.isLoading + 1 };

    case actionType.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isLoading: state.isLoading - 1,
        selectedCategory: action.selectedCategory,
        error: { ...state.error, categoryerr: {} },
      };
    case actionType.FETCH_CATEGORIES_ERROR:
      return { ...state, error: { ...state.error, categoryerr: action.error }, isLoading: state.isLoading - 1 };

    case actionType.SELECT_CATEGORY:
      return { ...state, selectedCategory: action.id };
    default:
      return state;
  }
};

export default discoveryReducer;
