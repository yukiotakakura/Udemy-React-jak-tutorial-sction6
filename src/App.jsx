import React, { useEffect, useState } from "react"; // 決まり文句
import { ColorfulMessage } from "./components/ColorfulMessage"; // コンポーネントをimport

// JSX記法

const App = () => {
  // Stateを使用する場合、useState()関数を使用する
  // Stateの分割代入の1つ目に「Stateの変数名」。2つ目に「Stateを更新する為の関数名」
  const [num, setNum] = useState(0); // 0で初期化
  const [faceShowFlag, setfaceShowFlag] = useState(false);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    // ①3の倍数時に「ON・OFF」ボタンが聞かないバグ。(ここでtrueがfalseに変わってから再レンダリングされる)
    setfaceShowFlag(!faceShowFlag);
  };

  // 再レンダリングを防ぎたい場合に「useEffect」が使える（つまり関心の分離）
  // こうすることで以下のif文はState変数「num」にだけ関心を持つようになる（つまりState変数numが更新された場合にのみ動くif文となる）
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // ②3の倍数時に「ON・OFF」ボタンが聞かないバグ。(ここでｆalseがtrueにになってしまう。つまりon/offが効かない)
        // 3の倍数のみ
        // State変数「faceShowFlag」がfalseの場合のみState変数「faceShowFlag」をtrueに更新する
        faceShowFlag || setfaceShowFlag(true);
      } else {
        // State変数「faceShowFlag」がtrueの場合のみState変数「faceShowFlag」をfalseに更新する
        faceShowFlag && setfaceShowFlag(false);
      }
    }
    // 警告を消す
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/*  Props（コンポーネントに渡す引数的なもの） */}
      {/*  Propsで値を渡す方法は2つある。方法①は属性を設定して渡す方法、方法②はタグで囲った中身を渡す方法 */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      {/*  State(各コンポーネントが持つ状態。Stateが変更されると再レンダリングされる。) */}
      <button onClick={onClickButton}>ボタン</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/*  &&の本当の意味は「右がtrueの場合のみ絵文字が表示される」 */}
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

// 上記のApp()関数を他のファイルでも使えるようにする
export default App;
