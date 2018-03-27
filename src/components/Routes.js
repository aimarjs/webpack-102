import React from "react";
import { Route, Link } from "react-router-dom";

import HomePage from "./Home";
import AboutPage from "./About";
import CounterPage from "./Counter";
import PostPage from "./Post";

export default () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/about">About</Link>
    </nav>
    <Route exact path="/" component={HomePage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/posts" component={PostPage} />
    <Route path="/About" component={AboutPage} />
  </div>
);
