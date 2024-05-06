import React from "react";

import checkPuzzle from "../utility/checkPuzzle";


class PuzzleButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const checkButton = document.getElementById("btn-check-puzzle");
    const restartButton = document.getElementById("btn-restart-puzzle");

    checkButton.addEventListener("click", () => {})
    restartButton.addEventListener("click", () => {
      if (checkPuzzle(null, null, this.props.cells) && 
      confirm("Are you sure you want to restart the puzzle?")
      ) {
        this.props.setCells(this.props.defaultCells)
      }
    })
  }

  render() {
    return (
      <div>
        <button
          id="btn-check-puzzle"
        >Check Puzzle</button>
        <button
          id="btn-restart-puzzle"
        >
          Restart Puzzle
        </button>
      </div>   
    )
  }
}

export default PuzzleButtons;