import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      {/* <a href="/">Home</a>          // href는 페이지를 다시 그리기 때문에 리액트에서는 안좋음
      <a href="/about">About</a>     // Link로 사용해야됨 */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
