import React from "react";
import { CELL_STATE } from "../utility/constants";
import "./Cell.css";

const CELL_STATE_CLASSES = {
  0: "blank",
  1: "filled",
  2: "crossed"
}

class Cell extends React.Component {
  constructor(props) {
    super(props)

    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleClicks = this.handleClicks.bind(this);
  }

  componentDidMount() {
    const cell = document.querySelectorAll(`[row="${this.props.row}"][col="${this.props.col}"]`)[0];

    //cell.addEventListener("click", this.handleLeftClick);
    //cell.addEventListener("contextmenu", this.handleRightClick);

    cell.addEventListener("mouseover", event => {
      this.handleClicks(event.buttons)
    });
    cell.addEventListener("mousedown", event => {
      //this.props.setButtonsPressed(event.buttons);
      this.handleClicks(event.buttons); // buttonsPressed not updated until event listener is finished.
    });
    cell.addEventListener("mouseup", () => {
      //this.props.setButtonsPressed(0);
    })
  }

  handleLeftClick(event) {
    if (this.props.puzzleComplete) {
      return;
    }

    if (this.props.cellState === CELL_STATE.FILLED) {
      this.props.setCellState(this.props.row, this.props.col, CELL_STATE.BLANK)
    }
    else {
      this.props.setCellState(this.props.row, this.props.col, CELL_STATE.FILLED)
    }
  }

  handleRightClick(event) {
    event.preventDefault();
    if (this.props.puzzleComplete) {
      return;
    }

    if (this.props.cellState === CELL_STATE.CROSSED) {
      this.props.setCellState(this.props.row, this.props.col, CELL_STATE.BLANK)
    }
    else {
      this.props.setCellState(this.props.row, this.props.col, CELL_STATE.CROSSED)
    }
  }

  handleClicks(buttonsPressed) {
    const startingState = 0;
    //console.log(this.props.buttonsPressed);
    if (buttonsPressed === 1) {
      if (this.props.cellState === CELL_STATE.FILLED) {
        this.props.setCellState(this.props.row, this.props.col, CELL_STATE.BLANK)
      }
      else {
        this.props.setCellState(this.props.row, this.props.col, CELL_STATE.FILLED)
      }
    }
    else if (buttonsPressed === 2) {
      if (this.props.cellState === CELL_STATE.CROSSED) {
        this.props.setCellState(this.props.row, this.props.col, CELL_STATE.BLANK)
      }
      else {
        this.props.setCellState(this.props.row, this.props.col, CELL_STATE.CROSSED)
      }
    }
  }

  render() {
    return (
      <button 
        row={this.props.row} 
        col={this.props.col} 
        className={"cell " + CELL_STATE_CLASSES[this.props.cellState]}
      >
        {""}
      </button>
    );
  }
}

export default Cell;