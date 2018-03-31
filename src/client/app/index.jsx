import React from "react";
import { render } from "react-dom";
import LikeMe from "./LikeMe.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <p> Hello React!</p>
        <LikeMe />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
