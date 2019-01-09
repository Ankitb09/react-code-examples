import { ADD_USER_DETAILS, ADD_SUSBCRIPTION } from './actionTypes';

export const addUserDetails = (userDetails) => ({
    type: ADD_USER_DETAILS,
    userDetails
})


export const addSubscription = (planDetails) => ({
    type: ADD_SUSBCRIPTION,
    planDetails
})

