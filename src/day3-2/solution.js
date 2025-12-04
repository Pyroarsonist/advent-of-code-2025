const digits = 12;

const getBiggestJoltageForSubstring = (_max, newNum) => {
  const fullStr = `${_max}${newNum}`;

  let max = 0;
  for (let i = 0; i < fullStr.length; i++) {
    const num = Number(fullStr.slice(0, i) + fullStr.slice(i + 1));

    max = Math.max(max, num);
  }

  return max;
};

const getBiggestJoltage = (line) => {
  let max = Number(line.substring(0, digits));

  for (let i = digits; i < line.length; i++) {
    max = getBiggestJoltageForSubstring(max, line[i]);
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
