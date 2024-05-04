import React from "react";

class PuzzleButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button>Check Puzzle</button>
        <button>Restart Puzzle</button>
      </div>   
    )
  }
}

export default PuzzleButtons;