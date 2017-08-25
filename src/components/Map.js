import React from "react";
import Firebase from "../Firebase.js";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

var database = Firebase.database();
var yesVotes = database.ref("questions/0/yes/");
var yesResults = "Hello";
var array = [];

class ReactMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 5
    };
    const yesVotes = Firebase.database().ref("questions/0/yes/");
    yesVotes.on("value", snapshot => {
      let newState = [];
      let results = snapshot.val();
      for (let result in results) {
        newState.push({
          id: result,
          lat: (results[result] = result.lat),
          lng: (results[result] = result.lng)
        });
      }
      console.log(newState);
      this.state = {
        yesVotes: newState
      };
    });
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
        {
          //this.state.yesVotes.map(id => <Marker position={[id.lat, id.lng]} />)
        }
      </Map>
    );
  }
}

export default ReactMap;
