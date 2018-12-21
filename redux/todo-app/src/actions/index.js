let nextTodoId = 0;

export function addTodos(text) {
    return {
        type: 'ADD_TODO',
        text: text,
        id: nextTodoId++
    }
}

export function toggleTodos(id){
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export function visibilityFilter(filter){
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}