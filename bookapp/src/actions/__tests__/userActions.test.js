import * as actionType from '../actionTypes';
import * as actions from '../userActions';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore();

describe('Synchronous actions', () => {
    beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
    });

    it('should create an action to login', () => {
        const expectedAction = {
            type: actionType.LOGIN,
        };
        store.dispatch(actions.login());
        expect(store.getActions()).toEqual([expectedAction]);
    });

    it('should create an action for Usertype', () => {
        const expectedAction = {
            type: actionType.USER_TYPE,
        };
        store.dispatch(actions.userType());
        expect(store.getActions()).toEqual([expectedAction]);
    });

    it('should create an action to subscribe user', () => {
        const expectedAction = {
            type: actionType.USER_SUBSCRIBE,
        };
        store.dispatch(actions.subscribeUser());
        expect(store.getActions()).toEqual([expectedAction]);
    });

});
