import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as bookDetailActions from "../bookDetailsActions";
import * as actionsTypes from "../actionTypes";
import bookDetails from "../../__mocks__/bookDetails";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

test("Retrieve Book details", async () => {

  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
});

  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: bookDetails })
  );

  const expectedActions = [
    { type: actionsTypes.FETCH_SELECTED_BOOK },
    { type: actionsTypes.FETCH_SELECTED_BOOK_SUCCESS, payload: bookDetails }
  ];

  // Using async/await here instead of the 'then' cuz its cleaner
  await store.dispatch(bookDetailActions.requestSelectedBook());

  // ASSERTIONS / EXPECTS
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});
