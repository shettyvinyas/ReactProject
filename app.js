import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1 className="Vinyas">Namaste Javascript</h1>;
};

const HeadingCompnents = () => (
  <div id="container">
    <Title/>
    <h1>Javascript Functional Components</h1>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingCompnents />);
