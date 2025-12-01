export const parser = (input) =>
  input
    .split("\n")
    .filter(Boolean)
    .map((str) => {
      const { groups } = str.match(/(?<direction>[LR])(?<distance>\d+)/);
      return {
        direction: groups.direction === "L" ? "left" : "right",
        distance: Number(groups.distance),
      };
    });
