export const parser = (input) => {
  const numbers = [];
  const operations = [];

  input.split("\n").forEach((l) => {
    const arr = l.split(" ").filter(Boolean);

    if (l.includes("+") || l.includes("*")) {
      operations.push(...arr);
    } else if (l) {
      numbers.push(arr.map((n) => +n));
    }
  });

  return { numbers, operations };
};
