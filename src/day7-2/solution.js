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

export const getSolution = (matrix) => {
  const start = findStart(matrix);

  const timelinesCache = new Map();

  const getTimelines = (x, y) => {
    const cache = timelinesCache.get(createKey(x, y));
    if (cache !== undefined) return cache;

    let timelines = 0;

    let tachyon = [x, y];

    while (true) {
      const [i, j] = tachyon;
      const newCoords = [i + 1, j];

      const cell = matrix[i + 1]?.[j];

      if (cell === EMPTY_CELL) {
        tachyon = [...newCoords];
      } else if (cell === SPLITTER) {
        const left = [i + 1, j - 1];
        const right = [i + 1, j + 1];

        const leftCell = matrix[left[0]]?.[left[1]];
        const rightCell = matrix[right[0]]?.[right[1]];

        let sum = 0;

        if (leftCell) {
          const leftTimelines = getTimelines(...left);

          sum += leftTimelines;

          timelinesCache.set(createKey(...left), leftTimelines);
        }

        if (rightCell) {
          const rightTimelines = getTimelines(...right);

          sum += rightTimelines;

          timelinesCache.set(createKey(...right), rightTimelines);
        }

        timelines += sum;

        timelinesCache.set(createKey(i + 1, j), timelines);
        return timelines;
      } else {
        return timelines + 1;
      }
    }
  };

  return getTimelines(...start);
};
