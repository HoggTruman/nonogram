import React from "react";

import Board from "./Board.js";
import Hints from "./Hints.js";

import { generateRowHints, generateColHints } from "../utility/puzzleUtility.js";

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

  componentDidMount() {
    const puzzleElement = document.getElementById("puzzle");
    puzzleElement.addEventListener("contextmenu", event => {
      event.preventDefault();
    });
  }


  render() {
    // Could probably have a single "hints" component and then pass in col or row as props and the corresponding hint generator
    
    return (
      <div id="puzzle">
        <div>{/*empty*/}</div>
        <Hints 
          rowOrCol="col"
          generator={generateColHints}
          solution={this.props.solution}
        />
        <Hints 
          rowOrCol="row"
          generator={generateRowHints}
          solution={this.props.solution}
        />
        <Board
          cells={this.props.cells}  
          setCellState={this.setCellState}
          puzzleComplete={this.props.puzzleComplete}
        />
      </div>
    )
  }
}

export default Puzzle;