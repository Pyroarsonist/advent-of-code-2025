const START = "S";
const EMPTY_CELL = ".";
const SPLITTER = "^";

const findStart = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === START) {
        return [i, j];
      }
    }
  }
  return null;
};

const createKey = (i, j) => `${i}:${j}`;

const getCoordsFromKey = (key) => key.split(":").map(Number);

export const getSolution = (matrix) => {
  const start = findStart(matrix);

  const tachyonsSet = new Set([createKey(...start)]);

  let splitCount = 0;
  while (tachyonsSet.size) {
    const tachyons = [...tachyonsSet.values()];
    tachyonsSet.clear();
    for (const key of tachyons) {
      const [i, j] = getCoordsFromKey(key);
      const newCoords = [i + 1, j];

      const cell = matrix[i + 1]?.[j];

      if (cell === EMPTY_CELL) {
        tachyonsSet.add(createKey(...newCoords));
      } else if (cell === SPLITTER) {
        const left = [i + 1, j - 1];
        const right = [i + 1, j + 1];

        const leftCell = matrix[left[0]]?.[left[1]];
        const rightCell = matrix[right[0]]?.[right[1]];

        if (leftCell) {
          tachyonsSet.add(createKey(...left));
        }

        if (rightCell) {
          tachyonsSet.add(createKey(...right));
        }

        if (leftCell || rightCell) {
          splitCount++;
        }
      }
    }
  }

  return splitCount;
};
