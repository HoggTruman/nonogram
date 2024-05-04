import seedrandom from "seedrandom";
import { CELL_STATE } from "./constants";


/**
 * CURRENTLY A BAD IMPLEMENTATION JUST TO GET THINGS ROLLING 
 * IT IS THEORETICALLY INFINITE, AS IT JUST SEEKS RANDOM CELLS OVER AND OVER RATHER THAN CHOOSING FROM AVAILABLE CELLS 
 * COULD ALSO POTENTIALLY LIMIT NUMBER OF BLOCK GROUPS PER ROW/COLUMN BASED ON SIZE AS CURRENTLY 
 * @param {*} size The number of rows and columns of the puzzle
 * @param {*} seed The seed of the puzzle
 * @returns A size by size 2D-array containing a puzzle
 */
function generatePuzzle(size, seed) {
  const rng = seedrandom(seed);
  //let availableCells = Array.from({length: size}, (_, i) => i)
  let availableCells = Math.ceil(size * size / 2);
  const puzzle = Array.from({length: size}, () => (
    Array.from({length: size}, () => CELL_STATE.BLANK)
  ))

  // ensure every row has at least one block filled
  for (let k = 0; k < size; k++) {
    const randomColumnIndex = Math.floor(rng() * size);
    const randomRowIndex = Math.floor(rng() * size);

    if (puzzle[k][randomColumnIndex] === CELL_STATE.BLANK) {
      puzzle[k][randomColumnIndex] = CELL_STATE.FILLED;
      availableCells--;
    }

    if (puzzle[randomRowIndex][k] === CELL_STATE.BLANK) {
      puzzle[randomRowIndex][k] = CELL_STATE.FILLED;
      availableCells--;
    }
  }

  while (availableCells > 0) {
    const randomColumnIndex = Math.floor(rng() * size);
    const randomRowIndex = Math.floor(rng() * size);

    if (puzzle[randomRowIndex][randomColumnIndex] === CELL_STATE.BLANK) {
      puzzle[randomRowIndex][randomColumnIndex] = CELL_STATE.FILLED;
      availableCells--;
    }
  }

  return puzzle
}

export default generatePuzzle;