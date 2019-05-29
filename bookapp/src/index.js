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
import App from "./components/App";
import BookDetails from "./containers/BookDetails";

import { GlobalStyle } from "./CommonStyles";

const store = createStore(rootReducer, applyMiddleware(thunk));
const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/books" component={ProtectedRoute(Discovery)} />
        <Route path="/books/:id" component={ProtectedRoute(BookDetails)} />
        <Route exact path="/" component={App} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
