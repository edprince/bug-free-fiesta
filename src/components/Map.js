import React from "react";
import Firebase from "../Firebase.js";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

var database = Firebase.database();
var yesVotes = database.ref("questions/0/yes/");

class ReactMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 5
      //yesVotes: [],
      //noVotes: []
    };
  }

  getYesVotes() {
    const rootRef = Firebase.database().ref("/");
    rootRef.on("value", snapshot => {
      let results = snapshot.val();
      this.setState({
        yesVotes: results
      });
    });
  }

  componentDidMount() {
    this.getYesVotes();
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
        <div className="yes">{this.state.yesVotes}</div>
      </Map>
    );
  }
}

export default ReactMap;
