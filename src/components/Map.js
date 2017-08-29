import React from "react";
import Firebase from "../Firebase.js";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { divIcon } from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

class ReactMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 5,
      yesVotes: []
    };
  }

  getYesVotes() {
    const id = 0;
    const rootRef = Firebase.database().ref("questions/" + id + "/");
    rootRef.on("value", snapshot => {
      let results = snapshot.val();
      console.log(results.yes);
      this.setState({
        yesVotes: results.yes
      });
    });
  }

  componentDidMount() {
    this.getYesVotes();
  }

  render() {
    //const position = [this.state.lat, this.state.lng];
    const position = [this.state.lat, this.state.lng];
    const icon = divIcon({
      className: "leaflet-div-icon",
      iconSize: [5, 5]
    });
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> &copy; <a href=&quot;http://cartodb.com/attributions&quot;>CartoDB</a>"
          url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        />
        {this.state.yesVotes.map(function(question) {
          console.log(question.lat);
          return <Marker icon={icon} position={[question.lat, question.lng]} />;
        })}

      </Map>
    );
  }
}

export default ReactMap;
