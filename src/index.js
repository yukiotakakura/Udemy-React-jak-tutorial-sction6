import React from "react"; // 決まり文句
import ReactDom from "react-dom"; //決まり文句
import App from "./App";

// 上記のAppコンポーネント （つまりApp()関数）をコンポーネントとしてレンダリングする、対象は「index.htmlのroot要素」に対して
ReactDom.render(<App />, document.getElementById("root"));
