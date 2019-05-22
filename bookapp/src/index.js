import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import App from './components/App';

const store = createStore(rootReducer, applyMiddleware(thunk));
const Root = ({ store }) => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
