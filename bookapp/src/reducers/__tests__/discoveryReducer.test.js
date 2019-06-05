import discoveryReducer from "../discoveryReducer";
import * as actionType from "../../actions/actionTypes";

const initialState = {
  categories: [],
  bookList: {},
  selectedCategory: "",
  error: {},
  isLoading: 0
};


// All actions related to Book list tasks
describe("Discovery Page Reducer book list Actions", () => {
  it("should handle initial state", () => {
    expect(discoveryReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_BOOKLIST", () => {
    expect(
      discoveryReducer(
        {
          bookList: {},
          isLoading: 0
        },
        {
          type: actionType.FETCH_BOOKLIST
        }
      )
    ).toEqual({
      bookList: {},
      isLoading: 1
    });
  });

  it("should handle error handling with FETCH_SELECTED_BOOK_ERROR", () => {
    expect(
      discoveryReducer(
        {
          bookList: {},
          isLoading: 1,
          error: {},
        },
        {
          type: actionType.FETCH_BOOKLIST_ERROR,
          error: {
            name: "Error",
            message: "Request failed with status code 404"
          }
        }
      )
    ).toEqual({
      bookList: {},
      isLoading: 0,
      error: {
        booklisterr: {
          name: "Error",
          message: "Request failed with status code 404"
        }
      }
    });
  });
});


// All actions related to Category tasks
describe("Discovery Page Reducer Category Actions", () => {

  it("should handle FETCH_CATEGORIES", () => {
    expect(
      discoveryReducer(
        {
          categories: [],
          isLoading: 0
        },
        {
          type: actionType.FETCH_CATEGORIES
        }
      )
    ).toEqual({
      categories: [],
      isLoading: 1
    });
  });

  it("should handle error handling with FETCH_CATEGORIES_ERROR", () => {
    expect(
      discoveryReducer(
        {
          categories: [],
          isLoading: 1,
          error: {},
        },
        {
          type: actionType.FETCH_CATEGORIES_ERROR,
          error: {
            name: "Error",
            message: "Request failed with status code 404"
          }
        }
      )
    ).toEqual({
      categories: [],
      isLoading: 0,
      error: {
        categoryerr: {
          name: "Error",
          message: "Request failed with status code 404"
        }
      }
    });
  });

  it("should select the correct category", () => {
    expect(
      discoveryReducer(
        {
          selectedCategory: "",
          isLoading: 0,
          error: {},
        },
        {
          type: actionType.SELECT_CATEGORY,
          id: "5c5ae8a3608b273a5257041e"
        }
      )
    ).toEqual({
      selectedCategory: "5c5ae8a3608b273a5257041e",
      isLoading: 0,
      error: {},
    });
  });
});
