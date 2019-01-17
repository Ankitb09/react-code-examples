import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App'
import rootReducer from './reducers'

import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/style.scss';

// var initState = {
//     user: [
//         {
//             id: 1,
//             fName: '',
//             lName: '',
//             email: '',
//             address: ''
//         }
//     ],
//     subscription: {
//         Duration: 12,
//         gbAmount: 5,
//         upFrontpayment: false
//     },
//     cCard: {
//         number: '',
//         expiry: ''
//     }
// }

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)



