import React from "react";
import Board from "./Board.js";

import RowHints from "./RowHints.js";
import ColHints from "./ColHints.js"

import "./Puzzle.css";


class Puzzle extends React.Component {
  constructor(props) {
    super(props);

    // HERE TO MAKE TESTING EASIER FOR NOW. THE PUZZLE SHOULD INITIALISE TO BE EMPTY
    this.props.setCells(structuredClone(this.props.solution));

    // bind methods
    this.setCellState = this.setCellState.bind(this);
  }

  setCellState(row, col, cellState) {
    this.props.setCells(oldCells => {
      const newCells = structuredClone(oldCells);
      newCells[row][col] = cellState;
      return newCells;
    })
  }


  render() {
    // Could probably have a single "hints" component and then pass in col or row as props and the corresponding hint generator
    
    return (
      <div id="puzzle">
        <div>{/*empty*/}</div>
        <ColHints solution={this.props.solution} />
        <RowHints solution={this.props.solution} />
        <Board
          cells={this.props.cells}  
          setCellState={this.setCellState}
        />
      </div>
    )
  }
}

export default Puzzle;