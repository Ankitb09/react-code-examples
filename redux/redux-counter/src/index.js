import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Counter  from './component';
import reducerFn from './reducer';

let store = createStore(reducerFn);

ReactDOM.render(<Counter store={store}/>, document.getElementById('root'))



