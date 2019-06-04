import discoveryReducer from "../discoveryReducer";
import * as actionType from "../../actions/actionTypes";

const initialState = {
  categories: [],
  bookList: {},
  selectedCategory: "",
  error: {},
  isLoading: 0
};

describe("Discovery Page Reducer", () => {
  it("should handle initial state", () => {
    expect(discoveryReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ", () => {
    expect(
      discoveryReducer(
        {
          bookList: {},
          isLoading: false
        },
        {
          type: actionType.FETCH_SELECTED_BOOK
        }
      )
    ).toEqual({
      bookListPremium: {},
      isLoading: true
    });
  });

  it("should handle error handling with FETCH_SELECTED_BOOK_ERROR", () => {
    expect(
      bookDetails(
        {
          bookListPremium: {},
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
      bookListPremium: {},
      isLoading: false,
      error: {
        name: "Error",
        message: "Request failed with status code 404"
      }
    });
  });
});
