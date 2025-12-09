export const parser = (input) =>
  input
    .split("\n")
    .filter(Boolean)
    .map((l, i) => {
      const [x, y, z] = l.split(",").map(Number);
      return { x, y, z, id: i };
    });
