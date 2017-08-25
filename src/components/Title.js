import React from "react";
import "./Title.css";

class Title extends React.Component {
  render() {
    return <h2>{this.props.title}</h2>;
  }
}

export default Title;
