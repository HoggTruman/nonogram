import React from "react";

import { CELL_STATE } from "../utility/constants";

import "./Board.css"


const CELL_STATE_CLASSES = {
  0: "blank",
  1: "filled",
  2: "crossed"
}


class Board extends React.Component {
  constructor(props) {
    super(props);

    this.cursorCellState = null;

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }


  componentDidMount() {
    const cellElements = document.querySelectorAll('.cell');

    cellElements.forEach(cell => {
      cell.addEventListener("mousedown", this.handleMouseDown)
      cell.addEventListener("mouseover", this.handleMouseOver)    
    })

    document.addEventListener("mouseup", () => {
        this.cursorCellState = null;    
    })
  }
  
  handleMouseDown(event) {
    if (this.props.puzzleComplete) { return; }

    const row = event.target.dataset.row;
    const col = event.target.dataset.col;
    
    if (event.button === 0) {
      if (this.props.cells[row][col] === CELL_STATE.FILLED) {
        this.cursorCellState = CELL_STATE.BLANK;
      }
      else {
        this.cursorCellState = CELL_STATE.FILLED;
      }
    }
    else if (event.button === 2) {
      if (this.props.cells[row][col] === CELL_STATE.CROSSED) {
        this.cursorCellState = CELL_STATE.BLANK;
      }
      else {
        this.cursorCellState = CELL_STATE.CROSSED;
      }
    }

    this.props.setCellState(row, col, this.cursorCellState);
  }

  handleMouseOver(event) {
    if (this.props.puzzleComplete) { return; }

    if (this.cursorCellState !== null) {
      this.props.setCellState(
        event.target.dataset.row,
        event.target.dataset.col,
        this.cursorCellState
      )
    }
  }

  render() {
    // I think using index as key here is fine since the lists are not rearranged. elements are only added and removed from the end
    return (
      <div id="board">
        {
          this.props.cells.map((row, rowIndex) => (
            <div 
              key={rowIndex.toString()}
              className="boardRow"
            >
              {row.map((cell, colIndex) => (
                <button 
                  key={colIndex.toString()} 
                  data-row={rowIndex} 
                  data-col={colIndex}
                  className={"cell " + CELL_STATE_CLASSES[this.props.cells[rowIndex][colIndex]]}
                >
                  {/* a cross for crossed?*/}
                </button>
              ))}
            </div>
          ))
        }
      </div>
    )
  }
}

export default Board;