import React from "react";

import checkPuzzle from "../utility/checkPuzzle";
import { getRandomSeed } from "../utility/puzzleUtility";


import "./styles/PuzzleMenu.css";





class PuzzleMenu extends React.Component {
  constructor(props) {
    super(props);

    this.statusMessage = {
      null: "",
      false: "The puzzle is incomplete / there are errors",
      true: "Congratulations! You have solved the puzzle",
    };
  }

  componentDidMount() {
    const checkButton = document.getElementById("btn-check-puzzle");
    const restartButton = document.getElementById("btn-restart-puzzle");
    const newButton = document.getElementById("btn-new-puzzle");

    checkButton.addEventListener("click", () => {
      if (this.props.puzzleComplete) {
        return;
      }
      const puzzleComplete = checkPuzzle(this.props.cells, this.props.solution);
      this.props.setPuzzleComplete(puzzleComplete);
    });

    restartButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to restart the puzzle?")) {
        this.props.setCells(this.props.defaultCells);
        this.props.setPuzzleComplete(null);
      }
    });

    newButton.addEventListener("click", () => {
      if (this.props.puzzleComplete || confirm("Are you sure you want to start a new puzzle?")) {
        this.props.navigateToNewPuzzlePage(
          this.props.size,
          getRandomSeed()
        )
      }
    })
  }

  render() {
    return (
      <div id="puzzle-menu">
        <p id="puzzle-info">
          {`${this.props.size} x ${this.props.size} Puzzle (seed: ${this.props.seed})` }
        </p>

        <div 
          id="status-message"
          className={this.props.puzzleComplete? "complete": "incomplete"}
        >
          {this.statusMessage[this.props.puzzleComplete]}
        </div>

        <div id="puzzle-buttons">
          <input
            type="button"
            id="btn-check-puzzle"
            value="Check Puzzle"
          />
          <input
            type="button"
            id="btn-restart-puzzle"
            value="Restart Puzzle"
          />
          <input 
            type="button"
            id="btn-new-puzzle"
            value={`New Puzzle (${this.props.size} x ${this.props.size})`}
          />
        </div>


      </div>   
    )
  }
}

export default PuzzleMenu;