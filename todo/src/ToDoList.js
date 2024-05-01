import React from 'react'
import ToDo from './ToDo';  // ToDoコンポーネントをインポート

const ToDoList = ({ todos, toggleTodo }) => {
  return todos.map((todo) => <ToDo todo = {todo} key={todo.id} toggleTodo={toggleTodo}/>);  // todosから一つ一つのtodoを取り出し、ToDoコンポーネントに渡す
  
}

export default ToDoList