import React from 'react';
import TodoList from './TodoList';


const TodoListItem = ( { todo } ) => {
    return(
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
        <div>
            <button className="complete-button">Mark As Completed</button>
            <button className="remove-button"> Remove </button>

        </div>       
    </div>
    )
 }

export default TodoListItem; 