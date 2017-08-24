import React from "react";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";

const TileLayer = Leaflet.tileLayer(
  "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
  {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: "abcd",
    maxZoom: 19
  }
);

class Map extends React.Component {
  render() {
    return <div id="mapid" className="map--mapContainer" ref={this.embed} />;
  }

  embed = mapElement => {
    let { pos, zoom } = this.props;
    this.map = Leaflet.map(mapElement);
    //this.map.setView([53.915213, -1.866901], 6);
    this.map.setView(pos, zoom);
    TileLayer.addTo(this.map);
  };
}

export default Map;
