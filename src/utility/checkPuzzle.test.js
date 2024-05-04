import checkPuzzle from "./checkPuzzle";

describe("checkPuzzle tests", () => {
  describe("correct puzzle returns true", () => {
    test("with no crossed #1", () => {
      const cells = [
        [1, 0, 1, 0, 1],
        [0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0],
        [1, 1, 1, 0, 0],
        [0, 1, 1, 0, 1]
      ];
  
      const rowHints = [
        [1,1,1],
        [1],
        [1,1],
        [3],
        [2,1]
      ];
  
      const colHints = [
        [1,2],
        [2],
        [1,2],
        [1],
        [2,1]
      ];
  
      expect(checkPuzzle(rowHints, colHints, cells)).toStrictEqual(true);
    });
  
    test("with no crossed #2", () => {
      const cells = [
        [1, 0, 1, 0, 0],
        [1, 0, 0, 1, 0],
        [1, 1, 1, 1, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 1, 0, 1]
      ];
  
      const rowHints = [
        [1,1],
        [1,1],
        [4],
        [2],
        [2,1]
      ];
  
      const colHints = [
        [3],
        [3],
        [1,3],
        [2],
        [1]
      ];
  
      expect(checkPuzzle(rowHints, colHints, cells)).toStrictEqual(true);
    });
  
    test("with all blank cells crossed #1", () => {
      const cells = [
        [1, 2, 1, 0, 1],
        [0, 0, 0, 0, 1],
        [1, 0, 2, 1, 2],
        [1, 1, 1, 2, 0],
        [2, 1, 1, 0, 1]
      ];
  
      const rowHints = [
        [1,1,1],
        [1],
        [1,1],
        [3],
        [2,1]
      ];
  
      const colHints = [
        [1,2],
        [2],
        [1,2],
        [1],
        [2,1]
      ];
  
      expect(checkPuzzle(rowHints, colHints, cells)).toStrictEqual(true);
    });
  
    test("with all blank cells crossed #2", () => {
      const cells = [
        [1, 2, 1, 2, 2],
        [1, 2, 2, 1, 2],
        [1, 1, 1, 1, 2],
        [2, 1, 1, 2, 2],
        [2, 1, 1, 2, 1]
      ];
  
      const rowHints = [
        [1,1],
        [1,1],
        [4],
        [2],
        [2,1]
      ];
  
      const colHints = [
        [3],
        [3],
        [1,3],
        [2],
        [1]
      ];
  
      expect(checkPuzzle(rowHints, colHints, cells)).toStrictEqual(true);
    });
  
    test("with some blank cells crossed  #1", () => {
      const cells = [
        [1, 2, 1, 0, 1],
        [0, 0, 0, 0, 1],
        [1, 0, 2, 1, 0],
        [1, 1, 1, 0, 2],
        [2, 1, 1, 0, 1]
      ];
  
      const rowHints = [
        [1,1,1],
        [1],
        [1,1],
        [3],
        [2,1]
      ];
  
      const colHints = [
        [1,2],
        [2],
        [1,2],
        [1],
        [2,1]
      ];
  
      expect(checkPuzzle(rowHints, colHints, cells)).toStrictEqual(true);
    });

    test("with some blank cells crossed #2", () => {
      const cells = [
        [1, 0, 1, 0, 2],
        [1, 2, 0, 1, 2],
        [1, 1, 1, 1, 0],
        [0, 1, 1, 2, 0],
        [2, 1, 1, 0, 1]
      ];
  
      const rowHints = [
        [1,1],
        [1,1],
        [4],
        [2],
        [2,1]
      ];
  
      const colHints = [
        [3],
        [3],
        [1,3],
        [2],
        [1]
      ];
  
      expect(checkPuzzle(rowHints, colHints, cells)).toStrictEqual(true);
    });
  })

  describe("incorrect puzzle returns false", () => {
    test("with correct rows, incorrect columns", () => {
      const cells = [
        [1, 0, 1, 0, 1],
        [0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0],
        [1, 1, 1, 0, 0],
        [0, 1, 1, 0, 1]
      ];
  
      const rowHints = [
        [1,1,1],
        [1],
        [1,1],
        [3],
        [2,1]
      ];
  
      const colHints = [
        [1],
        [3],
        [1],
        [1],
        [2,1]
      ];
  
      expect(checkPuzzle(rowHints, colHints, cells)).toStrictEqual(false);
    });

    test("with correct columns, incorrect rows", () => {
      const cells = [
        [1, 0, 1, 0, 1],
        [0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0],
        [1, 1, 1, 0, 0],
        [0, 1, 1, 0, 1]
      ];
  
      const rowHints = [
        [3],
        [1],
        [1],
        [1,1],
        [2,1]
      ];
  
      const colHints = [
        [1,2],
        [2],
        [1,2],
        [1],
        [2,1]
      ];
  
      expect(checkPuzzle(rowHints, colHints, cells)).toStrictEqual(false);
    });

    test("with incorrect columns, incorrect rows", () => {
      const cells = [
        [1, 0, 1, 0, 1],
        [0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0],
        [1, 1, 1, 0, 0],
        [0, 1, 1, 0, 1]
      ];
  
      const rowHints = [
        [3],
        [1],
        [1],
        [1,1],
        [2,1]
      ];
  
      const colHints = [
        [1,2],
        [2,1],
        [3],
        [1],
        [1,1]
      ];
  
      expect(checkPuzzle(rowHints, colHints, cells)).toStrictEqual(false);
    });

    test("blank puzzle, non-blank solution", () => {
      const cells = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ];
  
      const rowHints = [
        [3],
        [1],
        [1],
        [1,1],
        [2,1]
      ];
  
      const colHints = [
        [1,2],
        [2,1],
        [3],
        [1],
        [1,1]
      ];

      expect(checkPuzzle(rowHints, colHints, cells)).toStrictEqual(false);
    });

    test("replace correct puzzles filled with crossed", () => {
      const cells = [
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2]
      ];
  
      const rowHints = [
        [3],
        [1],
        [1],
        [1,1],
        [2,1]
      ];
  
      const colHints = [
        [1,2],
        [2,1],
        [3],
        [1],
        [1,1]
      ];

      expect(checkPuzzle(rowHints, colHints, cells)).toStrictEqual(false);
    });

    test("with no crossed #1", () => {
      const cells = [
        [2, 0, 2, 0, 2],
        [0, 0, 0, 0, 2],
        [2, 0, 0, 2, 0],
        [2, 2, 2, 0, 0],
        [0, 2, 2, 0, 2]
      ];
  
      const rowHints = [
        [1,1,1],
        [1],
        [1,1],
        [3],
        [2,1]
      ];
  
      const colHints = [
        [1,2],
        [2],
        [1,2],
        [1],
        [2,1]
      ];
  
      expect(checkPuzzle(rowHints, colHints, cells)).toStrictEqual(false);
    })
  })
  
})