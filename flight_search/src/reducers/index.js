import { combineReducers } from 'redux'


function flightData(state = {}, action) {
    switch (action.type) {
        case "GET_FLIGHTS":
            console.log(action.data)
            return action.data
    }
};


const rootReducer = combineReducers({
    flightData
})

export default rootReducer;
