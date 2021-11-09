import React from "react"; // 決まり文句

// 上記のApp()関数を他のファイルでも使えるようにする
export const ColorfulMessage = (props) => {
  // jsの分割代入
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};
