import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import listReducer from './contact-list';

const rootReducer = combineReducers({
    contList: listReducer,
    form: formReducer
});

export default rootReducer;
