export const parser = (input) =>
  input
    .split("\n")
    .map((l) => l.split(""))
    .filter(Boolean);
