import React from "react";
import { generateColHints } from "../utility/puzzleUtility";
import "./ColHints.css"

class ColHints extends React.Component {
  constructor(props) {
    super(props)

    this.toggleChecked = this.toggleChecked.bind(this);
  }

  toggleChecked(event) {
    event.target.classList.toggle("checked")
  }

  render() {
    // DOES THE CLASSNAME NEED SOMETHING TO DIFFERENTIATE THESE HINTS FROM THE ONES THAT WILL APPEAR IN COLUMNS OR WILL IMPORTING THE CSS HERE HANDLE IT?? THE HEIGHT NEEDS TO MATCH THE BOARD ROW HEIGHT SO DOES CSS NEED TO BE HANDLED BY PUZZLE??
    const colHints = generateColHints(this.props.solution);
    const colHintsMarkup = colHints.map((colHint, colIndex) => (
      <div key={colIndex} className="colHint" col={colIndex}>
        {
          colHint.map((hint, j) => (
            <button 
              key={j} 
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
      <div id="colHints">
        {colHintsMarkup}
      </div>
    )
  }
}

export default ColHints;