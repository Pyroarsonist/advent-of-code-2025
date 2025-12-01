import { NUMBERS, START } from "./const";

export const getSolution = (rotations) => {
  let position = START;
  let password = 0;
  for (const rotation of rotations) {
    const diff =
      rotation.direction === "left" ? -rotation.distance : rotation.distance;
    position += diff + NUMBERS;

    position %= NUMBERS;

    if (position === 0) password++;
  }
  return password;
};
