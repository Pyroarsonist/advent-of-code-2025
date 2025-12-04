const getBiggestJoltage = (line) => {
  let max = 0;
  for (let i = 0; i < line.length; i++) {
    const item = line[i];
    for (let j = i; j < line.length; j++) {
      if (i === j) continue;

      const secondItem = line[j];

      const num = Number(`${item}${secondItem}`);

      max = Math.max(max, num);
    }
  }

  return max;
};

export const getSolution = (input) => {
  let sum = 0;
  for (const line of input) {
    sum += getBiggestJoltage(line);
  }
  return sum;
};
