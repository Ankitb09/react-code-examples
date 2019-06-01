import { combineReducers } from 'redux';
import userReducer from './userReducer';
import discoveryReducer from './discoveryReducer';
import bookDetails from './bookDetailsReducer';

const rootReducer = combineReducers({
    user: userReducer,
    discovery: discoveryReducer,
    bookDetails 
});


export default rootReducer;