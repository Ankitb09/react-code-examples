import userReducer from "../userReducer";
import * as actionType from "../../actions/actionTypes";

const initialState = {
  userId: '',
  isLoading: false,
  error: {},
  isAuthenticated: false,
  accessType: 'free'
};

describe("User Reducer Login actions", () => {
  it("should handle initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle Login", () => {
    expect(
      userReducer(
        {
          userId: '',
          isLoading: false
        },
        {
          type: actionType.LOGIN
        }
      )
    ).toEqual({
      userId: '',
      isLoading: true
    });
  });

  it("should handle error", () => {
    expect(
      userReducer(
        {
          userId: '',
          isLoading: false,
          error: {},
        },
        {
          type: actionType.LOGIN_ERROR,
          error: {
            name: "Error",
            message: "Request failed with status code 404"
          }
        }
      )
    ).toEqual({
      userId: '',
      isLoading: false,
      isAuthenticated: false,
      error: {
        name: "Error",
        message: "Request failed with status code 404"
      }
    });
  });
});



describe("User Reducer `User Type` actions", () => {
  it("should handle Login", () => {
    expect(
      userReducer(
        {
          isLoading: false
        },
        {
          type: actionType.USER_TYPE
        }
      )
    ).toEqual({
      isLoading: true
    });
  });

  it("should handle sucessfully return type of user ", () => {
    expect(
      userReducer(
        {
          accessType: '',
          isLoading: true,
        },
        {
          type: actionType.USER_TYPE_SUCCESS,
          accessType: "paid"
        }
      )
    ).toEqual({
      accessType: "paid",
      isLoading: false,
    });
  });
});
