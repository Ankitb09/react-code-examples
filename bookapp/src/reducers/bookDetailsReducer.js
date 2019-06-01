import * as actionType from "../actions/actionTypes";

const intitalState = {
  bookListPremium: {},
  error: "",
  isLoading: 0
};

const bookDetails = (state = intitalState, action) => {
  switch (action.type) {
    case actionType.FETCH_SELECTED_BOOK:
      return { ...state, isLoading: state.isLoading + 1 };

    case actionType.FETCH_SELECTED_BOOK_ERROR:
      return { ...state, isLoading: state.isLoading - 1 };

    case actionType.FETCH_SELECTED_BOOK_SUCCESS:
      console.log(action);
      return {
        ...state,
        bookListPremium: {
          ...state.bookListPremium,
          [action.payload.id]: action.payload
        },
        isLoading: state.isLoading - 1
      };

    default:
      return state;
  }
};

export default bookDetails;
