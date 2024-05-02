import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// グローバルに渡したい値を定義する
const myInfo = {
  name: 'Taro',
  age: 20,
};

const myContext = createContext(myInfo);  // コンテキストを作成

ReactDOM.createRoot(document.getElementById('root')).render(
  // myContext.Providerで囲むことで，Appコンポーネントに値を渡すことができる
  // valueに渡したい値を指定する
  <myContext.Provider value={myInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </myContext.Provider>
);

export default myContext;  // 他のコンポーネントで使えるようにexportする
