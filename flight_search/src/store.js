import { createStore, combineReducers, applyMiddleware } from 'redux';
import Reducer from './reducers';
import thunk from 'redux-thunk';


function loggerMiddleWare(){
    return function(){
        
    }
}

const store = createStore(Reducer,applyMiddleware(thunk));

export default store;