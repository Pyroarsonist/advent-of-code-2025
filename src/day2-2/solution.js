const generateInvalidSet = (maxID) => {
  const set = new Set();

  const maxSize = Math.floor(maxID.toString().length / 2);

  const maxNumberBasedOnMaxSize = 10 ** maxSize - 1;

  for (let num = 1; num <= maxNumberBasedOnMaxSize; num++) {
    let combination = num.toString();

    while (true) {
      combination += num.toString();

      const currentNum = Number(combination);

      if (currentNum > maxID) {
        break;
      }

      set.add(currentNum);
    }
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
