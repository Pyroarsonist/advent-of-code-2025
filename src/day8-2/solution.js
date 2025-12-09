const getDistance = (p1, p2) =>
  Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2 + (p1.z - p2.z) ** 2);

const getClosestPairs = (boxes) => {
  const allPairs = new Map();

  for (const box of boxes) {
    for (const anotherBox of boxes) {
      if (box.id === anotherBox.id) continue;
      if (allPairs.has([box.id, anotherBox.id].sort().join(":"))) continue;

      const distance = getDistance(box, anotherBox);
      allPairs.set([box.id, anotherBox.id].sort().join(":"), distance);
    }
  }

  return [...allPairs.entries()]
    .sort((a, b) => a[1] - b[1])
    .map((e) => {
      const ids = e[0].split(":").map(Number);
      return {
        ids,
        distance: e[1],
      };
    });
};

export const getSolution = (boxes) => {
  const closestPairs = getClosestPairs(boxes);

  let disjointSets = boxes.map((b) => new Set([b.id]));

  let lastIDs;

  while (disjointSets.length !== 1) {
    const { ids } = closestPairs.shift();

    lastIDs = ids;

    const sets = disjointSets.filter((s) => ids.some((id) => s.has(id)));

    if (sets.length === 2) {
      const unionSet = sets[0].union(sets[1]);

      const newDisjointSets = disjointSets.filter(
        (s) => !ids.some((id) => s.has(id)),
      );
      disjointSets = [...newDisjointSets, unionSet];
    }
  }

  const lastBoxes = boxes.filter((b) => lastIDs.includes(b.id));

  return lastBoxes[0].x * lastBoxes[1].x;
};
