export const parser = (input) =>
  input
    .split("\n")
    .flatMap((arr) => arr.split(","))
    .filter(Boolean)
    .map((str) => str.split("-").map(Number));
