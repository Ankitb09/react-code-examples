import * as actionType from "../actions/actionTypes";

const initialState = {
  detailedBooks: {},
  error: {},
  isLoading: false
};

const bookDetails = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_SELECTED_BOOK:
      return { ...state, isLoading: true };

    case actionType.FETCH_SELECTED_BOOK_ERROR:
      return { ...state, isLoading: false, error: action.error };

    case actionType.FETCH_SELECTED_BOOK_SUCCESS:
      return {
        ...state,
        detailedBooks: {
          ...state.detailedBooks,
          [action.payload.id]: action.payload
        },
        isLoading: false
      };

    default:
      return state;
  }
};

export default bookDetails;
