import bookDetails from "../bookDetailsReducer";
import * as actionType from "../../actions/actionTypes";

const initialState = {
  detailedBooks: {},
  error: {},
  isLoading: false
};

describe("Book Details Reducer", () => {
  it("should handle initial state", () => {
    expect(bookDetails(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_SELECTED_BOOK", () => {
    expect(
      bookDetails(
        {
          detailedBooks: {},
          isLoading: false
        },
        {
          type: actionType.FETCH_SELECTED_BOOK
        }
      )
    ).toEqual({
      detailedBooks: {},
      isLoading: true
    });
  });

  it("should handle error handling with FETCH_SELECTED_BOOK_ERROR", () => {
    expect(
      bookDetails(
        {
          detailedBooks: {},
          isLoading: false,
          error: {},
        },
        {
          type: actionType.FETCH_SELECTED_BOOK_ERROR,
          error: {
            name: "Error",
            message: "Request failed with status code 404"
          }
        }
      )
    ).toEqual({
      detailedBooks: {},
      isLoading: false,
      error: {
        name: "Error",
        message: "Request failed with status code 404"
      }
    });
  });
});
