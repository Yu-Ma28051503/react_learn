import { useEffect, useState, useContext, useRef, useReducer, useMemo, useCallback } from 'react';
import './App.css'
import myContext from './main.jsx';  // main.jsxで作成したmyInfoをimport
import SubChild from './SubChild.jsx';
import useLocalStorage from './useLocalStorage.jsx';

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

function App() {
  // useState
  const [count, setCount] = useState(0);  // count変数を定義し，初期値0を設定, setCount関数を使ってcount変数を更新
  // useContext
  const myInfo = useContext(myContext);  //valueで指定したmyContextの値を取得
  // useRef
  const ref = useRef();
  // useReducer
  const [state, dispatch] = useReducer(reducer, 0);
  // useMemo
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  // useCallback
  const [counter, setCounter] = useState(0);
  // カスタムフック
  const [age, setAge] = useLocalStorage("age", 22);  // LocalStorageはkey:value

  // useState
  // カウントアップボタンがクリックされたときの処理
  const handleCountUp = () => {
    setCount(count + 1);  // count変数を更新
    // console.log(count);
  };

  // useEffect
  // 発火のタイミングを決めることができる
  useEffect(() => {
    // console.log('useEffect');の説明
    // ページをリロードするたびに発火
    // main.jsxでReact.StrictModeになっていると2回発火する
    // ビルドされると1回発火するようになる
    // console.log('useEffect');

    // setCount(count + 1);  // これを書くと無限ループになる

  }, [count]);

  // useRef
  const handleRef = () => {
    console.log(ref.current.value);
  }

  // useMemo
  // const square = () => {
  //   let i = 0;

  //   // 重い処理を準備
  //   while (i < 1000000000) {
  //     i++;
  //   }
  //   console.log(i);

  //   return count2 * count2;
  // }

  // useMemoでラッピングすることで，キャッシュに保存することができる
  // また，count2が変化したときだけ実行されるようになる
  const square = useMemo(() => {
    let i = 0;

    // 重い処理を準備
    while (i < 1000000000) {
      i++;
    }
    // console.log(i);

    return count2 * count2;
  }, [count2]);

  // useCallBack
  // const showCount = () => {
  //   alert("useCallback");
  //   console.log(counter);
  // }

  const showCount = useCallback(() => {
    alert("useCallback");
    console.log(counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>useState</h1>
      <p>
        useStateは状態の変化を管理する．
        更新箇所だけ再レンダリングされる．
      </p>
      <p>現在のカウント: {count}</p>
      <button onClick={handleCountUp}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <hr></hr>

      <h1>useEffect</h1>
      <p>
        useEffectは発火するタイミングを決めることができる．
        リロード時や特定の状態が変化したときに発火するのを指定することができる．
        また，第2引数に空の配列を渡すことで初回のみ発火するように設定することができる．
        逆に，第2引数に変数を渡すことでその変数が変化したときに発火するように設定することができる．
      </p>
      <hr/>

      <h1>useContext</h1>
      <p>
        useContextはコンポーネントツリーの深い階層にあるコンポーネントに値を渡すことができる．
        つまり，バケツリレーをしなくても値を渡すことができる．
        例えば, Appコンポーネントから3つしたの階層のコンポーネントに直接値を渡すことができる．
        今回は, main.jsxからAppコンポーネント(App.jsx)に値を渡す．
      </p>
      <p>
        名前: {myInfo.name}, 
        年齢: {myInfo.age}
      </p>
      <hr/>

      <h1>useRef</h1>
      <p>
        useRefはDOM要素や値を<b>参照</b>するためのフック．
        例えば，input要素の値を取得することができる．
      </p>
      <label>
        <input type='text' ref={ref}/>
        <button onClick={handleRef}>useRef</button>
      </label>
      <hr/>

      <h1>useReducer</h1>
      <p>
        イベントハンドラからの状態遷移を受け取って,
        以前の状態と遷移を処理して新しい状態を返す関数．
      </p>
      <p>現在のカウント: {state}</p>
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
      <hr/>

      <h1>useMemo</h1>
      <p>
        ブラウザのキャッシュに保存することができる．
        また，第2引数に変数を渡すことでその変数が変化したときだけ実行されるようになる．
        製品などを改善するときに使うと効果的
      </p>
      <p>count1: {count1}</p>
      <p>count2: {count2}</p>
      <p>結果: {square}</p>
      <button onClick={() => setCount1(count1 + 1)}>count1</button>
      <button onClick={() => setCount2(count2 + 1)}>count2</button>
      <hr/>

      <h1>useClalback</h1>
      <p>
        コールバック<b>関数</b>をキャッシュする．
        例えば，子コンポーネントに関数を渡すときに使う．
      </p>
      <SubChild showCount={showCount} />
      <hr/>

      <h1>カスタムフック</h1>
      <p>
        useなんちゃらを自分で作ることができる．
      </p>
      <p>{age}</p>
      <button onClick={() => setAge(80)}>カスタムボタン</button>

    </div>
  )
}

export default App
