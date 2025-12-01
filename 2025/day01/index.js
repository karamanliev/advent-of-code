import { readFile } from "fs/promises";

const input = await readFile("input", "utf8");
const arrInput = input.split("\n");

let position = rotateDial(50, 68, "L");
console.log(position);

arrInput.forEach((step) => {
  const distance = step.slice(1);

  if (step.slice(0, 1) === "L") {
    // console.log(step);
  } else {
    // console.log(step);
  }
});

function rotateDial(currPos, distance, direction) {
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
