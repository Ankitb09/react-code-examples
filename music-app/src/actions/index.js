import { ADD_USER_DETAILS, ADD_SUSBCRIPTION, ADD_CC_DETAILS } from './actionTypes';

export const addUserDetails = (userDetails) => ({
    type: ADD_USER_DETAILS,
    userDetails
});

export const addSubscription = (planDetails) => ({
    type: ADD_SUSBCRIPTION,
    planDetails
});

export const addCardDetails = (cardDetails) => ({
    type: ADD_CC_DETAILS,
    cardDetails
})

