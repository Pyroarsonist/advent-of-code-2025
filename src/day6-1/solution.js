const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const multiply = (arr) => arr.reduce((acc, curr) => acc * curr, 1);

export const getSolution = ({ numbers, operations }) => {
  const matrix = [];
  for (let j = 0; j < numbers[0].length; j++) {
    for (let i = 0; i < numbers.length; i++) {
      matrix[j] ??= [];
      matrix[j][i] = numbers[i][j];
    }
  }
  let s = 0;
  for (const arr of matrix) {
    const operation = operations.shift();

    const result = operation === "+" ? sum(arr) : multiply(arr);
    s += result;
  }
  return s;
};
