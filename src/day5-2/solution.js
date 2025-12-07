const isOverlapping = ([fromA, toA], [fromB, toB]) =>
  fromA <= toB && toA >= fromB;

const getCount = (ranges) =>
  ranges.reduce((sum, [from, to]) => sum + (to - from + 1), 0);

export const getSolution = (freshes) => {
  const ranges = freshes.toSorted(([fromA], [fromB]) => fromA - fromB);

  for (let i = 0; i < ranges.length - 1; i++) {
    const currentRange = ranges[i];
    const nextRange = ranges[i + 1];

    if (isOverlapping(currentRange, nextRange)) {
      const newRange = [
        Math.min(currentRange[0], nextRange[0]),
        Math.max(currentRange[1], nextRange[1]),
      ];

      ranges.splice(i, 2, newRange);
      i--;
    }
  }

  const count = getCount(ranges);

  return count;
};
