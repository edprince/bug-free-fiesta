import React, { Component } from "react";
import Title from "./components/Title.js";
import ReactMap from "./components/Map.js";
import QuestionList from "./components/QuestionList.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Title title="Global Polar" />
          <a className="align-right">Pose a question</a>
          <a className="align-right">Find more questions</a>
        </div>
        {
          //<QuestionList />
        }
        <ReactMap pos={[53.915213, -1.866901]} zoom={6} />
      </div>
    );
  }
}

export default App;
