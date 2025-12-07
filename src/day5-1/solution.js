export const getSolution = ({ availableIDs, freshes }) => {
  let counter = 0;
  outer: for (const id of availableIDs) {
    for (const [from, to] of freshes) {
      if (id >= from && id <= to) {
        counter++;
        continue outer;
      }
    }
  }
  return counter;
};
