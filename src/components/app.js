import React from "react";
import Counter from "./counter";
import { hot } from "react-hot-loader";
import Data from "../data/data";
import Post from "./post";

const App = () => (
  <div>
    <Counter
      headline={Data.headline}
      count={Data.count}
      subline={Data.subline}
    />
    <Post />
  </div>
);

export default hot(module)(App);
