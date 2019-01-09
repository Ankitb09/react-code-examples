import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import { selectSubreddit, fetchPosts } from './actions'
import rootReducer from './reducers'


const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))
