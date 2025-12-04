export const parser = (input) =>
  input
    .split("\n")
    .filter(Boolean)
    .map((l) => l.split(""));
