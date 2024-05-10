import { CELL_STATE } from "./constants";

/**
 * A helper function to get the transpose of a 2D-array
 * 
 * @param {*} matrix A 2D-array
 * @returns The 2D-array transpose of the input matrix
 */
function transpose(matrix) {
  return matrix[0].map((col, colIndex) => matrix.map(row => row[colIndex]))
}


/**
 *  Creates a square 2D array with specified length and element values
 * 
 * @param {integer} size The length of the inner and outer arrays
 * @param {*} value The value to fill the cells with
 * @returns A size by size 2D array with value elements
 */
function create2DArray(size, value) {
  return Array.from({length: size}, () => (
    Array.from({length: size}, () => value))
  );
}


/**
 * A helper function to generate the hints for the given array
 * 
 * @param {*} array A row/column to generate the hint array for
 * @returns Hint array for the input row/column array
 */
function generateHint(array) {
  const hintArray = [];
  let currentBlockLength = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === CELL_STATE.FILLED) {
      currentBlockLength += 1;

      if (i === array.length - 1) {
        hintArray.push(currentBlockLength);
      }
    }
    else if (currentBlockLength > 0) {
      hintArray.push(currentBlockLength);
      currentBlockLength = 0;
    }
  }

  return hintArray;
}


/**
 * Generates a 2D-array containing the hints for each row
 * 
 * @param {*} cells A 2D-array of the cells of a puzzle
 * @returns A 2D-array containing a hint array for each row of the puzzle
 */
function generateRowHints(cells) {
  return cells.map(row => generateHint(row))
}


/**
 * Generates a 2D-array containing the hints for each column
 * 
 * @param {*} cells A 2D-array of the cells of a puzzle
 * @returns A 2D-array containing a hint array for each column of the puzzle
 */
function generateColHints(cells) {
  const cellsTranspose = transpose(cells);
  return cellsTranspose.map(col => generateHint(col))
}


export { transpose, create2DArray, generateHint, generateRowHints, generateColHints };