import * as actionType from '../actionTypes';
import * as discoveryActions from '../discoveryActions';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore();

describe('Synchronous actions', () => {
    beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
    });

    it('should create an action to select category', () => {
        const expectedAction = {
            type: actionType.SELECT_CATEGORY,
        };
        store.dispatch(discoveryActions.selectCategory());
        expect(store.getActions()).toEqual([expectedAction]);
    });

});
