import * as actionType from "../actions/actionTypes";

const intitalState = {
  bookListPremium: {},
  error: "",
  isLoading: false
};

const bookDetails = (state = intitalState, action) => {
  switch (action.type) {
    case actionType.FETCH_SELECTED_BOOK:
      return { ...state, isLoading: true };

    case actionType.FETCH_SELECTED_BOOK_ERROR:
      return { ...state, isLoading: false };

    case actionType.FETCH_SELECTED_BOOK_SUCCESS:
      console.log(action);
      return {
        ...state,
        bookListPremium: {
          ...state.bookListPremium,
          [action.payload.id]: action.payload
        },
        isLoading: false
      };

    default:
      return state;
  }
};

export default bookDetails;
