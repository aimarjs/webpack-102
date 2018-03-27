import React from "react";
import { Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import universal from "react-universal-component";

const UniversalComponent = universal(props => import(`./${props.page}`));

export default () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/about">About</Link>
    </nav>
    <Switch>
      <Route exact path="/">
        <UniversalComponent page="Home" />
      </Route>
      <Route path="/counter">
        <UniversalComponent page="Counter" />
      </Route>
      <Route path="/posts">
        <UniversalComponent page="Post" />
      </Route>
      <Route path="/About">
        <UniversalComponent page="About" />
      </Route>
    </Switch>
  </div>
);
