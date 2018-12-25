import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app';

import todoAppReducer from './reducer/todoarrReducer';

var store = createStore(todoAppReducer)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.querySelector('#root'));
