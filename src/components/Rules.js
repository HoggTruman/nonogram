import React from "react";

import "./styles/Rules.css";


class Rules extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const rulesScreen = document.getElementById("rules-screen");
    const closeRulesButton = document.getElementById("close-rules-button");

    rulesScreen.addEventListener("click", event => {
      if (event.currentTarget === event.target) {
        rulesScreen.classList.toggle("hidden");
      }
    });

    closeRulesButton.addEventListener("click", event => {
      rulesScreen.classList.toggle("hidden");
    })
  }


  render() {
    return (
      <div 
        id="rules-screen"
        class="hidden"
      >
        <div
          id="rules"
        >
          <h1>How to play</h1>
          <p>
            You are given a blank grid of squares. The goal is to fill in or cross out each square based on the hints given.
          </p>
          <p>
            Each number represents the length of a group of consecutive filled squares in the corresponding row/column.
          </p>
          <p>
            For rows/columns with multiple numbers, there must be at least one crossed square between groups to separate them. 
          </p>
          <p> 
            You can fill a square by left clicking on it, or cross a square by right clicking on it.
          </p>
          <p> 
            To fill or cross multiple squares at a time you can click and drag.
          </p>

          <input type="button" id="close-rules-button" value="Close" />
        </div>
      </div>
    )
  }
}


export default Rules;