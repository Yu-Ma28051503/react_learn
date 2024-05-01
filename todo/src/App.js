import { useState, useRef } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';  // ランダムなIDを生成するためのライブラリ
import ToDoList from './ToDoList';  // ToDoListコンポーネントをインポート

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();  // inputからの入力を取得する

  // タスクの追加
  const handleAddTodo = (e) => {
    // console.log(todoNameRef.current.value);
    const name = todoNameRef.current.value;

    if (name === '') return;  // タスク名が空の場合は何もしない

    // すでにあるタスクの後ろに新しいタスクを追加
    setTodos((prevToDos) => {
      return [...prevToDos, {id: uuidv4(), name: name, completed: false}];
    })

    todoNameRef.current.value = null;  // タスクの追加後、inputを空にする
  }

  // タスクの消去
  const handleDeleteTodo = () => {
    const newTodos = todos.filter((todo) => !todo.completed); // completedがfalseのものだけを取り出す
    setTodos(newTodos);  // completedがfalseのものだけをtodosにセット
  }

  // タスクのチェックボックスの切り替え
  const toggleTodo = (id) => {
    const newTodos = [...todos];  // todosのコピーを作成
    const todo = newTodos.find((todo) => todo.id === id);  // idが一致するtodoを取得

    todo.completed = !todo.completed;  // completedの値を反転
    setTodos(newTodos);  // 反転したtodoをtodosにセット
  }

  return (
    <div>
      <h1>ToDo App</h1>
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクの追加</button>
      <button onClick={handleDeleteTodo}>タスクの消去</button>
      <div>残りのタスク数: {todos.filter((todo) => !todo.completed).length}</div>
      <ToDoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;
