import React from 'react';
import TodoList from './TodoList';
import './TodoListItem.css'

const TodoListItem = ({ todo }) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>

        <div className = "buttons-container">
            <button className = "completed-button"> Mask as Completed</button>
            <button className = "remove-button"> Remove </button>
        </div>
        
    </div>
);

export default TodoListItem;