import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers';

import Search from './containers/search';
const store = createStore(Reducers,applyMiddleware(ReduxThunk));
ReactDOM.render(
    <Provider store={store}>
        <Search />
    </Provider>,
    document.getElementById('root')
)