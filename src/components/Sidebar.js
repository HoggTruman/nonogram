import React from "react";
import { BOARD_SIZES } from "../utility/constants";

import "./styles/Sidebar.css";
import logo from "../assets/logo.jpg";
import { getRandomSeed } from "../utility/puzzleUtility";



class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const generatePuzzleButton = document.getElementById("generate-from-seed");

    generatePuzzleButton.addEventListener('click', event => {
      event.preventDefault();

      if (this.props.puzzleComplete || confirm("Are you sure you want to start a new puzzle?")) {
        const formData = new FormData(document.getElementById("puzzle-form")); 
        const size = formData.get('puzzle-size');
        const seed = formData.get('seed') || getRandomSeed();
        
        this.props.navigateToNewPuzzlePage(size, seed)
      }
    })
  }
  


  render() {
    const sizeRadioButtons = BOARD_SIZES.map(BOARD_SIZE => (
      <div key={BOARD_SIZE} className="size-button">
        <input 
          type="radio" 
          className="btn-check" 
          id={`radio-size-${BOARD_SIZE}`} 
          value={BOARD_SIZE} 
          name="puzzle-size" 
          autoComplete="off" 
          defaultChecked={Number(this.props.size) === BOARD_SIZE}
        />
        <label 
          className="btn" 
          htmlFor={`radio-size-${BOARD_SIZE}`} 
        >
          {`${BOARD_SIZE} x ${BOARD_SIZE}`} 
        </label>
      </div>
    ))


    return (
      <div id="sidebar">
        <img src={logo} id="logo" alt="logo" title="Go to Homepage" />

        <hr className="thick"/>
        <h2>New Puzzle</h2>
        <hr className="thick"/>

        <form id="puzzle-form">
          <div id="size-buttons">
            {sizeRadioButtons}
          </div>

          <div id="enter-seed">
            <label htmlFor="seed">Enter seed (or leave blank for random):</label>
            <input type="number" id="seed" name="seed" />
          </div>

          <input
            type="submit"
            id="generate-from-seed"
            value="Generate Puzzle"
          />
        </form>

        <hr className="thick"/>

        <input
            type="button"
            id="how-to-play"
            value="How to play"
        />

      </div>
    )
  }

}

export default Sidebar;