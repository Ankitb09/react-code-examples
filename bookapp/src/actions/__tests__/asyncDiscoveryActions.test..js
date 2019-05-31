import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as dicoveryActions from '../discoveryActions';
import * as actionsTypes from '../actionTypes';
import BooksData from '../../__mock__/booksData';

test('Retrieve categories', async () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore();

  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: BooksData })
  );

  const expectedActions = [
    { type: actionsTypes.FETCH_DATA },
    { type: actionsTypes.FETCH_DATA_SUCCESS, payload: RecipeData },
  ];

  // Using async/await here instead of the 'then' cuz its cleaner
  await store.dispatch(actions.requestData());

  // ASSERTIONS / EXPECTS
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});
