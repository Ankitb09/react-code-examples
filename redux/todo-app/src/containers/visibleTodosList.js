import { connect } from 'react-redux';
import { toggleTodos } from '../actions';
import TodoList from '../components/todoList';


const getVisibleTodo = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}


const mapStateToProps = (state) => ({
    todos: getVisibleTodo(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodos: id => dispatch(toggleTodos(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);