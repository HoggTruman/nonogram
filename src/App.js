import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import PuzzlePage from "./pages/PuzzlePage.js";



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route path="/puzzle/:size/:seed" element={ <PuzzlePage /> } />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;