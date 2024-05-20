import React from "react";

import checkPuzzle from "../utility/checkPuzzle";
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

    checkButton.addEventListener("click", () => {
      if (this.props.puzzleComplete) {
        return;
      }
      const puzzleComplete = checkPuzzle(this.props.cells, this.props.solution);
      this.props.setPuzzleComplete(puzzleComplete);
    })

    restartButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to restart the puzzle?")) {
        this.props.setCells(this.props.defaultCells);
        this.props.setPuzzleComplete(null);
      }
    })
  }

  render() {
    return (
      <div>
        <button id="btn-check-puzzle">
          Check Puzzle
        </button>
        <button id="btn-restart-puzzle">
          Restart Puzzle
        </button>
        <div 
          id="status-message"
          className={this.props.puzzleComplete? "complete": "incomplete"}
        >
          {this.statusMessage[this.props.puzzleComplete]}
        </div>
      </div>   
    )
  }
}

export default PuzzleMenu;