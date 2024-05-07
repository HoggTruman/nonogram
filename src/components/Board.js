import React from "react";
import Cell from "./Cell";

import "./Board.css"

import { CELL_STATE } from "../utility/constants";
const CELL_STATE_CLASSES = {
  0: "blank",
  1: "filled",
  2: "crossed"
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    
  }


  componentDidMount() {
    const cellElements = document.querySelectorAll('.cell');

    cellElements.forEach(cell => {
      cell.addEventListener("mousedown", event => {
        this.handleClicks(Number(cell.dataset.row), Number(cell.dataset.col), event.buttons)
      })
      
    })
    const board = document.getElementById("board")

    document.addEventListener("mouseup", event => {})

    board.addEventListener("contextmenu", event => {
      event.preventDefault()
    })
  }
  // make seperate for hover and mousedown??
  handleClicks(row, col, buttonsPressed) {
    // console.log(row, col, buttonsPressed)
    if (buttonsPressed === 1) {
      if (this.props.cells[row][col] === CELL_STATE.FILLED) {
        this.props.setCellState(row, col, CELL_STATE.BLANK)
      }
      else {
        this.props.setCellState(row, col, CELL_STATE.FILLED)
      }
    }
    else if (buttonsPressed === 2) {
      if (this.props.cells[row][col] === CELL_STATE.CROSSED) {
        this.props.setCellState(row, col, CELL_STATE.BLANK)
      }
      else {
        this.props.setCellState(row, col, CELL_STATE.CROSSED)
      }
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