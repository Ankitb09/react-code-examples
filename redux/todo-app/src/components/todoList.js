import React from 'react';
import Todo from './todo';

const TodoList = ({ todos, toggleTodos }) => (
    <ul>
        {todos.map((todo) => {
            return (<Todo key={todo.id} onClick={() => toggleTodos(todo.id)} {...todo} />
            )
        })}
    </ul>
)


export default TodoList;