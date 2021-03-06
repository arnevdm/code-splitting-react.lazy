import React from "react";
import logo from "../logo.svg";

const Page3 = ({ onRouteChange }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Welcome to Page 3
      </a>
    </header>
    <button onClick={() => onRouteChange("page1")}>Page1</button>
    <button onClick={() => onRouteChange("page2")}>Page2</button>
    <button className="disabled">Page3</button>
  </div>
);

export default Page3;
