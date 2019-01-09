import { combineReducers } from 'redux'
import user from './userReducer';

const rootReducer = combineReducers({
    user
})

export default rootReducer

var init = {
    user: [
        {
            id: 1,
            fName: '',
            lName: '',
            email: '',
            address: '',
            subscription: {
                Duration: 12,
                gbAmount: 5,
                upFrontpayment: false
            }
        }
    ]
}