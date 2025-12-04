import { EMPTY_SPACE, ROLL_PAPER } from "./const";

const createKey = (i, j) => `${i}:${j}`;
const getValuesFromKey = (key) => key.split(":").map(Number);

const getNeighbours = (i, j, matrix) => {
  const item = matrix[i][j];
  if (item !== ROLL_PAPER) {
    return 0;
  }

  let neighbours = 0;

  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue;

      const newItem = matrix[i + dx]?.[j + dy];

      if (newItem === ROLL_PAPER) neighbours++;
    }
  }

  return neighbours;
};

const forklift = (key, matrix, pool) => {
  const [i, j] = getValuesFromKey(key);

  pool.delete(key);

  if (matrix[i][j].isForklifted) return false;

  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue;

      if (
        matrix[i + dx]?.[j + dy] === undefined ||
        matrix[i + dx]?.[j + dy].isForklifted
      ) {
        continue;
      }

      matrix[i + dx][j + dy].neighbours = Math.max(
        matrix[i + dx][j + dy].neighbours - 1,
        0,
      );
      if (matrix[i + dx][j + dy].neighbours < 4) {
        pool.add(createKey(i + dx, j + dy));
      }
    }
  }

  const isForklifted = matrix[i][j].neighbours < 4;

  if (isForklifted) {
    matrix[i][j].neighbours = 0;
    matrix[i][j].isForklifted = true;
  }

  return isForklifted;
};

const getMatrix = (input) => {
  const matrix = [];
  for (let i = 0; i < input.length; i++) {
    matrix.push([]);
    for (let j = 0; j < input[0].length; j++) {
      matrix[i][j] = {
        neighbours: getNeighbours(i, j, input),
        isForklifted: input[i][j] === EMPTY_SPACE,
      };
    }
  }
  return matrix;
};

export const getSolution = (input) => {
  const matrix = getMatrix(input);
  const pool = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (!matrix[i][j].isForklifted && matrix[i][j].neighbours < 4) {
        pool.add(createKey(i, j));
      }
    }
  }

  let count = 0;

  while (pool.size > 0) {
    for (const key of pool) {
      const forklifted = forklift(key, matrix, pool);
      if (forklifted) count++;
    }
  }
  return count;
};
