import { useState } from "react";
import { useParams } from "react-router-dom";

import Puzzle from "../components/Puzzle";
import PuzzleMenu from "../components/PuzzleMenu";
import generatePuzzle from "../utility/generatePuzzle";
import generateDefaultCells from "../utility/generateDefaultCells";
import SideBar from "../components/SideBar";
import WithNavigateHook from "../components/WithNavigateHook";

import "./styles/PuzzlePage.css";



function PuzzlePage(props) {
  const {size, seed} = useParams();  // should rename to avoid confusion???????????????????????????????????????????????????????????

  // default state
  const defaultCells = generateDefaultCells(size);
  
  // state 
  const [cells, setCells] = useState(defaultCells);
  const [puzzleComplete, setPuzzleComplete] = useState(null);

  const solution = generatePuzzle(size, seed);  

  function navigateToNewPuzzlePage(size, seed) {
    const newUrl = /*'puzzle' +*/ '/' + size + '/' + seed
    props.navigation(newUrl);
    setCells(generateDefaultCells(size));
    setPuzzleComplete(null); 
  }
    
  return (
    <>
      <SideBar
        size={size}
        navigateToNewPuzzlePage={navigateToNewPuzzlePage}
        puzzleComplete={puzzleComplete}
      />
      <main>
        <h1>Size: {size}</h1>
        <h1>Seed: {seed}</h1>
        <div id="puzzle-area">
          <Puzzle 
            size={size}
            seed={seed}
            cells={cells}
            setCells={setCells}
            puzzleComplete={puzzleComplete}
            solution={solution}
          />
          <PuzzleMenu
            size={size}
            seed={seed}
            cells={cells}
            setCells={setCells}
            puzzleComplete={puzzleComplete}
            setPuzzleComplete={setPuzzleComplete}
            defaultCells={defaultCells}
            solution={solution}
            navigateToNewPuzzlePage={navigateToNewPuzzlePage}
          />
        </div>
      </main>
      
    </>
  )
}

export default WithNavigateHook(PuzzlePage);