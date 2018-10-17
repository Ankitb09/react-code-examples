import { combineReducers } from 'redux';

let initialState = {
    
}


const fetchFligts = (state = {}, action) => {
    switch (action.type) {
        case "GET_FLIGHTS":
            return action.data;
        
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    departList: fetchFligts
});

export default rootReducer;