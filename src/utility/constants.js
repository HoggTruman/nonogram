const CELL_STATE = {
  BLANK: 0,
  FILLED: 1,
  CROSSED: 2
};

const CELL_STATE_CLASSES = {
  [CELL_STATE.BLANK]: "blank",
  [CELL_STATE.FILLED]: "filled",
  [CELL_STATE.CROSSED]: "crossed"
}

export {CELL_STATE, CELL_STATE_CLASSES};