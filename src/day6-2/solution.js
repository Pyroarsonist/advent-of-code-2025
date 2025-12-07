const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const multiply = (arr) => arr.reduce((acc, curr) => acc * curr, 1);

export const getSolution = (input) => {
  let s = 0;
  const arr = [];
  for (let j = input[0].length - 1; j >= 0; j--) {
    let str = "";
    let sign = null;
    for (let i = 0; i < input.length; i++) {
      const char = input[i][j];

      if (char === "+" || char === "*") {
        sign = char;
      } else {
        str += char;
      }
    }

    const num = +str;
    arr.push(num);

    if (sign) {
      const result = sign === "+" ? sum(arr) : multiply(arr);
      s += result;
      arr.length = 0;
      str = "";
      sign = null;
      j--;
    }
  }
  return s;
};
