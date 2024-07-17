import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div className="homePage">
      <div className="postContes">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>

        <div className="postTextContainer">
          今はreactの学習中です。これから頑張ってReactエンジニアとして活躍してきます。
        </div>
        <div className="nameAndDeleteButton">
          <h3>@kakedaCode</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  );
};
