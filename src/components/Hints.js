import React from "react";

import "./Hints.css";

class Hints extends React.Component {
  constructor(props) {
    super(props)

    this.toggleChecked = this.toggleChecked.bind(this);
  }

  toggleChecked(event) {
    event.target.classList.toggle("checked")
  }

  render() {
    const rowOrColHints = this.props.generator(this.props.solution);
    const rowOrColHintsMarkup = rowOrColHints.map((rowOrColHint, rowOrColIndex) => (
      <div 
        key={rowOrColIndex} 
        className={this.props.rowOrCol === "row"? "rowHint": "colHint"} 
        data-pos={rowOrColIndex}
      >
        {
          rowOrColHint.map((hint, hintIndex) => (
            <button 
              key={hintIndex} 
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
      <div id={this.props.rowOrCol === "row"? "rowHints": "colHints"}>
        {rowOrColHintsMarkup}
      </div>
    )
  }
}

export default Hints;