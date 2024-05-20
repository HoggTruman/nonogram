import React from "react";

import checkPuzzle from "../utility/checkPuzzle";
import "./styles/PuzzleMenu.css";


class PuzzleMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statusMessage: ""
    };
  }

  componentDidMount() {
    const checkButton = document.getElementById("btn-check-puzzle");
    const restartButton = document.getElementById("btn-restart-puzzle");

    checkButton.addEventListener("click", () => {
      if (this.props.puzzleComplete) {
        return;
      }
      
      if (checkPuzzle(this.props.cells, this.props.solution)) {
        this.props.setPuzzleComplete(true);
        this.setState({statusMessage: "Congratulations! You have solved the puzzle"});
      }
      else {
        /* it would be good to differentiate between the puzzle being incomplete and incorrect here
        but this can't be done reliably unless the solution is unique */
        this.setState({statusMessage: "The puzzle is incomplete / there are errors"});
      }
    })

    restartButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to restart the puzzle?")) {
        this.props.setCells(this.props.defaultCells);
        this.props.setPuzzleComplete(false);
        this.setState({statusMessage: ""});
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
          {this.state.statusMessage}
        </div>
      </div>   
    )
  }
}

export default PuzzleMenu;