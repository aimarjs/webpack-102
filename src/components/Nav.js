import React from "react";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default nav;
