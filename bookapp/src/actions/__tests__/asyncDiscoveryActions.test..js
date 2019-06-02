import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as dicoveryActions from "../discoveryActions";
import * as actionsTypes from "../actionTypes";
import BooksData from "../../__mocks__/booksData";
import categoryData from "../../__mocks__/categoryData";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

test("Retrieve Book List", async () => {

  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
});

  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: BooksData })
  );

  let normalisedObj = {};
  BooksData.books.forEach(ele => {
    normalisedObj[ele.id] = ele;
  });

  const expectedActions = [
    { type: actionsTypes.FETCH_BOOKLIST },
    { type: actionsTypes.FETCH_BOOKLIST_SUCCESS, payload: normalisedObj }
  ];

  // Using async/await here instead of the 'then' cuz its cleaner
  await store.dispatch(dicoveryActions.requestBookList());

  // ASSERTIONS / EXPECTS
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});


test("Retrieve Category List", async () => {

  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: categoryData })
  );


  const expectedActions = [
    { type: actionsTypes.FETCH_CATEGORIES },
    { type: actionsTypes.FETCH_CATEGORIES_SUCCESS, payload: categoryData.categories, selectedCategory: categoryData.categories[0].id }
  ];

  // Using async/await here instead of the 'then' cuz its cleaner
  await store.dispatch(dicoveryActions.requestCategories());

  // ASSERTIONS / EXPECTS
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.get).toHaveBeenCalledTimes(2);
});