import React from "react";
import QuestionTile from "./QuestionTile";
import Firebase from "../Firebase.js";
import "./QuestionList.css";

class QuestionList extends React.Component {
  constructor() {
    super();
    const questions = Firebase.database().ref("/");
    this.state = {
      questions: []
    };
    questions.on("value", snapshot => {
      let results = snapshot.val();
      this.state.questions.push(results);
    });
  }
  render() {
    return (
      <ul>
        {this.state.questions.map(function(question) {
          return (
            <QuestionTile
              key={question.title}
              title={question.title}
              responses={question.responses}
              timestamp={question.timestamp}
            />
          );
        })}
      </ul>
    );
  }
}

export default QuestionList;
