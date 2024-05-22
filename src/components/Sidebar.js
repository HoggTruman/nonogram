import React from "react";
import { BOARD_SIZES, MAX_SEED, MIN_SEED } from "../utility/constants";
import { getRandomSeed } from "../utility/puzzleUtility";

import "./styles/Sidebar.css";
import logo from "../assets/logo.jpg";
import title from "../assets/title.png";





class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const generatePuzzleButton = document.getElementById("generate-from-seed");

    generatePuzzleButton.addEventListener('click', event => {
      event.preventDefault();

      const formData = new FormData(document.getElementById("puzzle-form")); 
      const size = formData.get('puzzle-size');
      const seed = formData.get('seed') === ""? getRandomSeed(): Number(formData.get('seed'));
  
      
      if (Number.isInteger(seed) === false || seed < MIN_SEED || seed > MAX_SEED) {
        alert("The seed must be a non-negative integer (max 9 digits)");
      }
      else if (this.props.puzzleComplete || confirm("Are you sure you want to start a new puzzle?")) {        
        this.props.navigateToNewPuzzlePage(size, seed)
      }
    })


    const rulesButton = document.getElementById("rules-button")

    rulesButton.addEventListener("click", () => {
      const rulesScreen = document.getElementById("rules-screen");

      rulesScreen.classList.toggle("hidden");
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
        <img src={title} id="sidebar-title" alt="title" title="NONOGRAM" />

        <hr className="thick"/>
        <h3>How to play</h3>
        <hr className="thick"/>

        <input
            type="button"
            id="rules-button"
            value="Show Rules"
        />

        <hr className="thick"/>
        <h3>New Puzzle</h3>
        <hr className="thick"/>

        <form id="puzzle-form">
          <div id="size-buttons">
            {sizeRadioButtons}
          </div>

          <div id="enter-seed">
            <label htmlFor="seed">
              {"Enter seed (or leave blank for random):"}
            </label>
            <input 
              type="text" 
              id="seed" 
              name="seed"
              pattern="\d*"
            />
          </div>

          <input
            type="submit"
            id="generate-from-seed"
            value="Generate Puzzle"
          />
        </form>
        <hr className="thick"/>

      </div>
    )
  }

}

export default Sidebar;