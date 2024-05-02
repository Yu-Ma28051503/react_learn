import React from 'react'

const ToDo = ({ todo, toggleTodo }) => {
    const handleTodoClick = () => {
        toggleTodo(todo.id);
    };
  
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    readOnly
                    onChange={handleTodoClick}
                    className='accent-cyan-500 rounded-full'    
                />
                <span className='text-center box-decoration-slice box-border'>
                    {todo.name}
                </span>
            </label>
            
        </div>
    )
}

export default ToDo
