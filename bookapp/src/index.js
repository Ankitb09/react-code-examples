import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import ProtectedRoute from "./containers/ProtectedRoute";
import Header from "./components/Header";
import Discovery from "./containers/Discovery";
import Login from "./containers/login";
import BookDetails from "./containers/BookDetails";

import { GlobalStyle } from "./CommonStyles";

const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    if (action.type.includes("LOGIN") || action.type.includes("USER")) {
      sessionStorage.setItem("user", JSON.stringify(getState().user));
    }
    return result;
  };
};

const reHydrateStore = () => {
  const data = sessionStorage.getItem("user");
  if (data) {
    return {user: JSON.parse(data)}
  }
  return undefined;
};

const store = createStore(
  rootReducer,
  reHydrateStore(),
  applyMiddleware(thunk, localStorageMiddleware)
);
const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/books" component={ProtectedRoute(Discovery)} />
        <Route path="/books/:id" component={ProtectedRoute(BookDetails)} />
        <Route exact path="/" component={Login} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
