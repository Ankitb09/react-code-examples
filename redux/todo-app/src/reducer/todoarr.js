let initialState = {
    todos: [
        {
            id: 1,
            text: '',
            completed: false
        }
    ],
    visibilityFilter: 'showAll'
}

const todoAppReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        text: action.text,
                        completed: false
                    }
                ]
            });
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id == action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        case 'SET_VISIBILITY_FILTER' :
            return Object.assign({},state,{
                visibilityFilter : action.filter
            })
        default:
            return state;
    }
}