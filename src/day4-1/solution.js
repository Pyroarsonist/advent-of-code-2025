import { ROLL_PAPER } from "./const";

const couldBeForklifted = (i, j, matrix) => {
  const item = matrix[i][j];
  if (item !== ROLL_PAPER) {
    return false;
  }

  let neighbours = 0;

  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue;

      const newItem = matrix[i + dx]?.[j + dy];

      if (newItem === ROLL_PAPER) neighbours++;
    }
  }

  return neighbours < 4;
};

export const getSolution = (input) => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (couldBeForklifted(i, j, input)) {
        count++;
      }
    }
  }
  return count;
};
