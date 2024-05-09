import { useState } from "react";
import { useParams } from "react-router-dom";

import Puzzle from "../components/Puzzle";
import PuzzleMenu from "../components/PuzzleMenu";
import generatePuzzle from "../utility/generatePuzzle";
import { generateRowHints, generateColHints } from "../utility/puzzleUtility";
import { CELL_STATE } from "../utility/constants";
//import "./PuzzlePage.css";


function PuzzlePage() {
  let {size, seed} = useParams();

  // default state
  const defaultCells = Array.from({length: size}, () => (
    Array.from({length: size}, () => CELL_STATE.BLANK))
  );
  
  // state 
  const [cells, setCells] = useState(defaultCells);
  const [puzzleComplete, setPuzzleComplete] = useState(false);

  const solution = generatePuzzle(size, seed);  
    
  return (
    <>
      <h1>Size: {size}</h1>
      <h1>Seed: {seed}</h1>
      <Puzzle 
        size={size}
        seed={seed}
        cells={cells}
        setCells={setCells}
        puzzleComplete={puzzleComplete}
        solution={solution}
      />
      <PuzzleMenu
        cells={cells}
        setCells={setCells}
        puzzleComplete={puzzleComplete}
        setPuzzleComplete={setPuzzleComplete}
        defaultCells={defaultCells}
        solution={solution}
      />
    </>
  )
}

export default PuzzlePage;