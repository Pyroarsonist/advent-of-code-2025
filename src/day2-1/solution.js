const generateInvalidSet = (maxID) => {
  const set = new Set();

  const maxIDStr = maxID.toString();
  const middle = Number(maxIDStr.slice(0, maxIDStr.length / 2 + 1));

  for (let id = 1; id < middle; id++) {
    const str = id.toString();
    const newNum = Number(str + str);
    set.add(newNum);
  }

  return set;
};

const getMaxID = (input) => {
  let max = 0;
  for (const [, end] of input) {
    max = Math.max(max, end);
  }

  return max;
};

export const getSolution = (input) => {
  const maxID = getMaxID(input);
  const invalidSet = generateInvalidSet(maxID);
  let sum = 0;
  for (const [start, end] of input) {
    for (let id = start; id <= end; id++) {
      if (invalidSet.has(id)) {
        sum += id;
      }
    }
  }
  return sum;
};
