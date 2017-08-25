import React from "react";
import "./QuestionTile.css";

class QuestionList extends React.Component {
  render() {
    return (
      <li>
        <p>
          {this.props.title}
          {" "}
          <span className="minor">(Posted: {this.props.timestamp})</span>
        </p>
        <span className="minor">{this.props.responses} responses</span>
      </li>
    );
  }
}

export default QuestionList;
