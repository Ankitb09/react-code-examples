import React from 'react';


import AddTodo from '../containers/addTodo';
import VisibleTodoList from '../containers/visibleTodosList';


const App = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
        </div>
    )
}

export default App;