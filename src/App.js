import React, { Component } from "react";
import * as firebase from "firebase";
import Map from "./components/Map.js";
import "./App.css";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBrLOyRxAH_H2JKZZlMNAov5nyQBgTfVGk",
  authDomain: "global-poler.firebaseapp.com",
  databaseURL: "https://global-poler.firebaseio.com",
  projectId: "global-poler",
  storageBucket: "",
  messagingSenderId: "806403697914"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Are you happy?</h2>
          <Map pos={[53.915213, -1.866901]} zoom={6} />
        </div>
      </div>
    );
  }
}

export default App;
