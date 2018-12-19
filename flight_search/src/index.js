import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';


import Search from './containers/search';



ReactDOM.render(
    <Provider store={Store}>
        <Search />
    </Provider>,
    document.getElementById('root')
)