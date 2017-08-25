import React, { Component } from "react";
import ReactMap from "./components/Map.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Are you happy?</h2>
        </div>
        <ReactMap pos={[53.915213, -1.866901]} zoom={6} />
      </div>
    );
  }
}

export default App;
