import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as userActions from "../userActions";
import * as actionsTypes from "../actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

test("Testing Post request for user authentication(Login)", async () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });

  mockAxios.post.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        status: "success",
        user_id: "5c5aeaf5608b273a5257043f"
      }
    })
  );

  const expectedActions = [
    { type: actionsTypes.LOGIN },
    {
      type: actionsTypes.LOGIN_SUCCESS,
      payload: btoa("5c5aeaf5608b273a5257043f")
    }
  ];

  // Using async/await here instead of the 'then' cuz its cleaner
  await store.dispatch(userActions.requestLogin());

  // ASSERTIONS / EXPECTS
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
});


test("Testing access type of user", async () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });

  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        "user_id": "5c5aeaf5608b273a5257043f",
        "access_type": "premium"
      }
    })
  );

  const expectedActions = [
    { type: actionsTypes.USER_TYPE },
    {
      type: actionsTypes.USER_TYPE_SUCCESS,
      accessType: "premium"
    }
  ];

  // Using async/await here instead of the 'then' cuz its cleaner
  await store.dispatch(userActions.getUserType());

  // ASSERTIONS / EXPECTS
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});
