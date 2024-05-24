import React from "react";
import { Link } from "react-router-dom";

import { BOARD_SIZES, MAX_SEED, MIN_SEED } from "../utility/constants";
import { getRandomSeed } from "../utility/puzzleUtility";

import "./styles/Sidebar.css";
import logo from "../assets/logo.jpg";
import title from "../assets/sidebarTitle.png";






class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    const generatePuzzleButton = document.getElementById("generate-from-seed-btn");

    generatePuzzleButton.addEventListener('click', event => {
      event.preventDefault();

      const formData = new FormData(document.getElementById("puzzle-form")); 
      const newSize = formData.get('puzzle-size');
      const newSeed = formData.get('seed') === ""? getRandomSeed(): Number(formData.get('seed'));
  
      
      if (Number.isInteger(newSeed) === false || newSeed < MIN_SEED || newSeed > MAX_SEED) {
        alert("The seed must be a non-negative integer (max 9 digits)");
      }
      else if (
        this.props.puzzleComplete || 
        this.props.isValidSize === false || 
        this.props.isValidSeed === false ||
        confirm("Are you sure you want to start a new puzzle?")
      ) {        
        this.props.navigateToNewPuzzlePage(newSize, newSeed)
      }
    });

    

    const rulesButton = document.getElementById("rules-button");

    rulesButton.addEventListener("click", () => {
      const rulesScreen = document.getElementById("rules-screen");
      rulesScreen.classList.toggle("hidden");
    })
  }
  


  render() {
    const sizeRadioButtons = BOARD_SIZES.map(boardSize => (
      <div key={boardSize} className="size-button">
        <input 
          type="radio" 
          className="btn-check" 
          id={`radio-size-${boardSize}`} 
          value={boardSize} 
          name="puzzle-size" 
          autoComplete="off" 
          defaultChecked={this.props.isValidSize? boardSize.toString() === this.props.size: boardSize === 5}
        />
        <label 
          className="btn" 
          htmlFor={`radio-size-${boardSize}`} 
        >
          {`${boardSize} x ${boardSize}`} 
        </label>
      </div>
    ));


    return (
      <div id="sidebar">
        <Link to ="/">
        <img src={logo} id="logo" alt="logo" title="Go to homepage" />
        </Link>
        
        <img src={title} id="title-img" alt="title" title="NONOGRAM" />

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
            id="generate-from-seed-btn"
            value="Generate Puzzle"
          />
        </form>
        <hr className="thick"/>

      </div>
    )
  }
}



export default Sidebar;