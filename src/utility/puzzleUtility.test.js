import { generateHint, generateRowHints, generateColHints, transpose } from "./puzzleUtility.js";


describe("generateHint Tests", () => {
  test('single central block group of 1', () => {
    const input = [0, 0, 1, 0, 0];
    const expected = [1];
    expect(generateHint(input)).toStrictEqual(expected);
  })

  test('single start block group of 1', () => {
    const input = [1, 0, 0, 0, 0];
    const expected = [1];
    expect(generateHint(input)).toStrictEqual(expected);
  })

  test('single end block group of 1', () => {
    const input = [0, 0, 0, 0, 1];
    const expected = [1];
    expect(generateHint(input)).toStrictEqual(expected);
  })

  test('single end block group of 2', () => {
    const input = [0, 0, 0, 1, 1];
    const expected = [2];
    expect(generateHint(input)).toStrictEqual(expected);
  })

  test('single end block group of 3', () => {
    const input = [0, 0, 1, 1, 1];
    const expected = [3];
    expect(generateHint(input)).toStrictEqual(expected);
  })

  test('full array filled', () => {
    const input = [1, 1, 1, 1, 1];
    const expected = [5];
    expect(generateHint(input)).toStrictEqual(expected);
  })

  test('two block groups of 1', () => {
    const input = [1, 0, 1, 0, 0];
    const expected = [1, 1];
    expect(generateHint(input)).toStrictEqual(expected);
  })

  test('two central block groups of 1', () => {
    const input = [0, 1, 0, 1, 0];
    const expected = [1, 1];
    expect(generateHint(input)).toStrictEqual(expected);
  })

  test('three block groups of 1', () => {
    const input = [1, 0, 1, 0, 1];
    const expected = [1, 1, 1];
    expect(generateHint(input)).toStrictEqual(expected);
  })

  test('block group of 1 and block group of 3', () => {
    const input = [1, 0, 1, 1, 1];
    const expected = [1, 3];
    expect(generateHint(input)).toStrictEqual(expected);
  })

  test('block group of 3 and block group of 1', () => {
    const input = [1, 1, 1, 0, 1];
    const expected = [3, 1];
    expect(generateHint(input)).toStrictEqual(expected);
  })

  test('large assortment', () => {
    const input = [1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1];
    const expected = [2, 1, 4, 2, 1];
    expect(generateHint(input)).toStrictEqual(expected);
  })

  test('no filled squares', () => {
    const input = [0, 0, 0, 0, 0];
    const expected = [];
    expect(generateHint(input)).toStrictEqual(expected);
  })
})


describe("generateRowHints Tests", () => {
  test("5 by 5 puzzle #1", () => {
    const input = [
      [0, 1, 1, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 1, 1],
      [0, 1, 1, 0, 1],
      [0, 0, 1, 0, 1]
    ];
    const expected = [
      [2],
      [1],
      [1, 2],
      [2, 1],
      [1, 1]
    ];

    expect(generateRowHints(input)).toStrictEqual(expected)
  })
})


describe("generateColHints Tests", () => {
  test("5 by 5 puzzle #1", () => {
    const input = [
      [0, 1, 1, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 1, 1],
      [0, 1, 1, 0, 1],
      [0, 0, 1, 0, 1]
    ];
    const expected = [
      [2],
      [1, 1],
      [1, 2],
      [1],
      [3]
    ];

    expect(generateColHints(input)).toStrictEqual(expected)
  })
})


describe("transpose tests", () => {
  const matrices = [
    [
      [[1,0,0],[1,1,0],[1,1,1]],
      [[1,1,1],[0,1,1],[0,0,1]]
    ],

    [
      [[1,0,0],[0,1,0],[0,0,1]],
      [[1,0,0],[0,1,0],[0,0,1]]
    ],

    [
      [[1,1,1],[0,1,1],[0,0,1]],
      [[1,0,0],[1,1,0],[1,1,1]]
    ],
  ]; 

  test.each(matrices)("test correct transpose", (input, expected) => {
    expect(transpose(input)).toStrictEqual(expected);
  });
})
