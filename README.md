# React入門勉強



## Reactを始めるにあたっての手順
1. Node.jsが入っているか確認する
```[bash]
$ node -v
#  v21.7.3
```

2. Reactのプロジェクトを作成する
```[bash]
npx create-react-app <プロジェクト名>
```

3. ローカル環境で動かす
```[bash]
npm start
```
webブラウザでReactのロゴが回っている画面が出れば環境構築はOK(localhost:3000)

4. 不要なコードやファイルは消去しておく

`src`ディレクトリ内の
- App.test.js
- logo.svg
- reportWebVitals.js
- setupTests.js
- App.jsの`import logo from './logo.svg';`
- App.jsの`clasName='App'`内のコード
- index.jsの`import reportWebVitals from './reportWebVitals';`
- index.jsの14~17行目
- App.cssの中身を全て消去

5. App.jsを編集してアプリを作っていく！

## ToDoリスト


## 参考
- [【React入門】完全初心者OK! 1から簡単なToDoアプリを作ってReactの一歩を踏み出してみよう ~Reactチュートリアル~](https://youtu.be/nRCNL9T3J98?si=ebt7RYN4rS107ZJz)
- [React公式](https://ja.react.dev/)

