import React from "react";
import Cell from "./Cell";

import "./Board.css"

class Board extends React.Component {
  constructor(props) {
    super(props);
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
                <Cell 
                  key={colIndex.toString()} 
                  row={rowIndex} 
                  col={colIndex}
                  cellState={this.props.cells[rowIndex][colIndex]}
                  setCellState={this.props.setCellState}
                  puzzleComplete={this.props.puzzleComplete}
                />
              ))}
            </div>
          ))
        }
      </div>
    )
  }
}

export default Board;