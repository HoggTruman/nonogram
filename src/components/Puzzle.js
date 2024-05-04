import React from "react";
import Board from "./Board.js";

import generatePuzzle from "../utility/generatePuzzle.js";
import { CELL_STATE } from "../utility/constants.js";
import RowHints from "./RowHints.js";
import ColHints from "./ColHints.js"

import "./Puzzle.css";


class Puzzle extends React.Component {
  constructor(props) {
    super(props)

    const cells = Array.from({length: this.props.size}, () => (
      Array.from({length: this.props.size}, () => CELL_STATE.BLANK)));


    this.solution = generatePuzzle(this.props.size, this.props.seed);

    //this.state = {cells: cells};
    this.state = {
      cells: this.solution.map(row => [...row])
    };


    // bind methods
    this.setCellState = this.setCellState.bind(this);
  }

  setCellState(row, col, cellState) {
    const newCells = [...this.state.cells];
    newCells[row][col] = cellState;

    this.setState({
      ...this.state,
      cells: newCells
    });
  }


  componentDidUpdate(prevProps) {
    // mAYBE NOT NEEDED NOW????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    // if (prevProps.size !== this.props.size || prevProps.seed !== this.props.seed) {
    //   console.log(prevProps.seed)
    //   console.log(this.props.seed)
      
    //   const cells = Array.from({length: this.props.size}, () => (
    //     Array.from({length: this.props.size}, () => CELL_STATE.BLANK)));

    //   this.setState({
    //     ...this.state, 
    //     //cells: cells  
    //     cells: generatePuzzle(this.props.size, this.props.seed)
    //   });
    // }
  }


  render() {
    // Could probably have a single "hints" component and then pass in col or row as props and the corresponding hint generator
    
    return (
      <div id="puzzle">
        <div empty></div>
        <ColHints solution={this.solution} />
        <RowHints solution={this.solution} />
        <Board
          cells={this.state.cells}  
          setCellState={this.setCellState}
        />
      </div>
    )
  }
}

export default Puzzle;