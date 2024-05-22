'use strict'

import React from "react";
//import "./styles/HomePage.css";
import WithNavigateHook from "../components/WithNavigateHook";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const formSubmit = document.getElementById("submit-btn");
    
    formSubmit.addEventListener("click", event => {
      event.preventDefault();
      const formData = new FormData(document.getElementById("puzzle-form")); 
      const size = formData.get('puzzle-size');
      const seed = formData.get('seed') || 0;

      const nextUrl = `/puzzle/${size}/${seed}`;
      
      this.props.navigation(nextUrl);
    })
  }

  render() {
    return (
      <>
        <h1>Nonogram Puzzle</h1>
        <form id="puzzle-form">
          <input type="radio" className="btn-check" id="5-by-5" value="5" name="puzzle-size" autoComplete="off" defaultChecked />
          <label className="btn btn-outline-primary" htmlFor="5-by-5">5 x 5</label>

          <input type="radio" className="btn-check" id="10-by-10" value="10" name="puzzle-size" autoComplete="off" />
          <label className="btn btn-outline-primary" htmlFor="10-by-10">10 x 10</label>

          <input type="radio" className="btn-check" id="15-by-15" value="15" name="puzzle-size" autoComplete="off" />
          <label className="btn btn-outline-primary" htmlFor="15-by-15">15 x 15</label>

          <input type="radio" className="btn-check" id="20-by-20" value="20" name="puzzle-size" autoComplete="off" />
          <label className="btn btn-outline-primary" htmlFor="20-by-20">20 x 20</label>

          <input type="radio" className="btn-check" id="25-by-25" value="25" name="puzzle-size" autoComplete="off" />
          <label className="btn btn-outline-primary" htmlFor="25-by-25">25 x 25</label>

          <label htmlFor="seed">Enter a puzzle ID or leave blank for random:</label>
          <input type="number" id="seed" name="seed" />

          <input type="submit" id="submit-btn" value="Generate Puzzle" />
          
        </form>
      </>
    )
  }
}

export default WithNavigateHook(HomePage);