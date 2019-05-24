import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import ProtectedRoute from './containers/ProtectedRoute';
import BookList from './components/BookList';
import App from './components/App';

const store = createStore(rootReducer, applyMiddleware(thunk));
const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/app" component={ProtectedRoute(BookList)} />
                <Route exact path="/" component={App} />
                <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
