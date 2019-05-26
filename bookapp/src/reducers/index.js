import { combineReducers } from 'redux';
import userReducer from './userReducer';
import discoveryReducer from './discoveryReducer';

const rootReducer = combineReducers({
    user: userReducer,
    discovery: discoveryReducer
});


export default rootReducer;