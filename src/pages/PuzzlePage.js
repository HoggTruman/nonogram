import React from "react";
import { useParams } from "react-router-dom";
import Puzzle from "../components/Puzzle";
import PuzzleButtons from "../components/PuzzleButtons";
//import "./PuzzlePage.css";


function PuzzlePage() {
  let {size, seed} = useParams();
    
  return (
    <>
      <h1>Size: {size}</h1>
      <h1>Seed: {seed}</h1>
      <Puzzle 
        size={size}
        seed={seed}
      />
      <PuzzleButtons />
    </>
  )
}

export default PuzzlePage;