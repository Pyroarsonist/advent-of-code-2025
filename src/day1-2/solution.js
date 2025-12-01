import { NUMBERS, START } from "./const";

export const getSolution = (rotations) => {
  let position = START;
  let password = 0;
  for (const rotation of rotations) {
    const initPosition = position;
    const diff =
      rotation.direction === "left" ? -rotation.distance : rotation.distance;
    position += diff;

    const rounds = Math.abs(Math.floor(position / NUMBERS));
    position %= NUMBERS;

    password += rounds;
    if (rotation.direction === "left") {
      if (position === 0) password++;
      if (initPosition === 0) password--;
    }

    if (position < 0) position += NUMBERS;
  }
  return password;
};
