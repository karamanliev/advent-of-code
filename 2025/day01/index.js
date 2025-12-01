import { readFile } from "fs/promises";

const input = await readFile("input", "utf8");
const inputArr = input.trim().split("\n");

let position = 50;
let password = 0;

inputArr.forEach((step) => {
  const direction = step.slice(0, 1);
  const distance = parseInt(step.slice(1), 10);
  // console.log(direction, distance);

  position = rotateDial(position, direction, distance);
  // console.log(position);

  if (position === 0) password++;
});

console.log(password);

function rotateDial(currPos, direction, distance) {
  const dialLength = 100;
  const dialArr = Array.from({ length: dialLength }, (_, i) => i);
  let newPosition;

  if (!distance || !direction) newPosition = dialArr[currPos];

  if (direction === "L") {
    const beforeArrStart = currPos - distance < 0;
    const newPos = beforeArrStart
      ? dialLength - (distance - currPos)
      : currPos - distance;

    newPosition = dialArr[newPos];
  }

  if (direction === "R") {
    const afterArrEnd = currPos + distance > dialLength - 1;
    const newPos = afterArrEnd
      ? distance - (dialLength - currPos)
      : currPos + distance;

    newPosition = dialArr[newPos];
  }

  return newPosition;
}
