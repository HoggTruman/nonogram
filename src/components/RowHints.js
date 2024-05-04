import React from "react";
import { generateRowHints } from "../utility/puzzleUtility";

import "./RowHints.css";

class RowHints extends React.Component {
  constructor(props) {
    super(props)

    this.toggleChecked = this.toggleChecked.bind(this);
  }

  toggleChecked(event) {
    event.target.classList.toggle("checked")
  }

  render() {
    // DOES THE CLASSNAME NEED SOMETHING TO DIFFERENTIATE THESE HINTS FROM THE ONES THAT WILL APPEAR IN COLUMNS OR WILL IMPORTING THE CSS HERE HANDLE IT?? THE HEIGHT NEEDS TO MATCH THE BOARD ROW HEIGHT SO DOES CSS NEED TO BE HANDLED BY PUZZLE??
    const rowHints = generateRowHints(this.props.solution);
    const rowHintsMarkup = rowHints.map((rowHint, rowIndex) => (
      <div key={rowIndex} className="rowHint" row={rowIndex}>
        {
          rowHint.map((hint, i) => (
            <button 
              key={i} 
              className="hint"
              onClick={this.toggleChecked}
            >
              { hint }
            </button>
          ))
        }
      </div>
    ))

    return (
      <div id="rowHints">
        {rowHintsMarkup}
      </div>
    )
  }
}

export default RowHints;