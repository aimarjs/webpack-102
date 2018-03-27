import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { hot } from "react-hot-loader";

import "./nav.css";
import Data from "../data/data";

import Routes from "./Routes";

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default hot(module)(App);
