import React from "react";
import * as firebase from "firebase";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

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

var database = firebase.database();
var yesVotes = database.ref("questions/0/yes/");

class ReactMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 5,

    };
  }

  render() {
    //const position = [this.state.lat, this.state.lng];
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> &copy; <a href=&quot;http://cartodb.com/attributions&quot;>CartoDB</a>"
          url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        />
      </Map>
      {this.state.markers.map((position, idx) => 
        <Marker key={`marker-${idx}`} position={position}></Marker>
      )}
    );
  }
}

export default ReactMap;
