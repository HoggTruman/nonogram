import { generateRowHints, generateColHints} from "./puzzleUtility";
import { CELL_STATE } from "./constants";

/**
 * checks if the puzzle has been completed correctly
 * note: compares hints rather than the solution 2D-array in case solution is not unique
 * 
 * @param {*} rowHints 2D-array containing solution's rowHints
 * @param {*} colHints 2D-array containing solution's colHints
 * @param {*} cells 2D-array of the users filled out cells
 * @returns true if puzzle is correct, false otherwise
 */
function checkPuzzle(rowHints, colHints, cells) {
  // convert crossed cells to blank
  const cleanCells = cells.map(row => (
    row.map(cell => cell === CELL_STATE.CROSSED? CELL_STATE.BLANK: cell)
  ))

  return (
    JSON.stringify(rowHints) === JSON.stringify(generateRowHints(cleanCells)) &&
    JSON.stringify(colHints) === JSON.stringify(generateColHints(cleanCells))
  )
}

export default checkPuzzle