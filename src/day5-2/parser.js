export const parser = (input) => {
  const freshes = [];

  input.split("\n").forEach((l) => {
    if (l.includes("-")) {
      const [a, b] = l.split("-");
      freshes.push([+a, +b]);
    }
  });

  return freshes;
};
