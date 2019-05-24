import * as actionType from '../actions/actionTypes';

const intitalState = {
    categories: {},
    bookList: {},
    selectedCategory: "",
    selectedBook: "",
    
}


const discoveryReducer = (state = intitalState, action) => {
    switch(action.type){
        case actionType.FETCH_BOOKLIST:
            return {...state, }
    }
}