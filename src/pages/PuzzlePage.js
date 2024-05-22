import { useState } from "react";
import { useParams } from "react-router-dom";

import Puzzle from "../components/Puzzle";
import PuzzleMenu from "../components/PuzzleMenu";
import Sidebar from "../components/Sidebar";
import WithNavigateHook from "../components/WithNavigateHook";

import generatePuzzle from "../utility/generatePuzzle";
import generateDefaultCells from "../utility/generateDefaultCells";


import "./styles/PuzzlePage.css";
import Rules from "../components/Rules";



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
      <Sidebar
        size={size}
        navigateToNewPuzzlePage={navigateToNewPuzzlePage}
        puzzleComplete={puzzleComplete}
      />
      <main>
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

      <Rules/>
      
    </>
  )
}

export default WithNavigateHook(PuzzlePage);