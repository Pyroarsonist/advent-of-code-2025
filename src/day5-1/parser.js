export const parser = (input) => {
  const freshes = [];
  const availableIDs = [];

  input.split("\n").forEach((l) => {
    if (l.includes("-")) {
      const [a, b] = l.split("-");
      freshes.push([+a, +b]);
    } else if (l) {
      availableIDs.push(+l);
    }
  });

  return { freshes, availableIDs };
};
