import React from "react";

const getBundle = () => {
  import("lodash").then(_ => {
    console.log("imported", _);
  });
};

const AboutPage = () => (
  <div className="container">
    <h1 onClick={getBundle}>About page</h1>
  </div>
);

export default AboutPage;
