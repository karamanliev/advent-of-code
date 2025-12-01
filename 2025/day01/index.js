import { readFile } from "fs/promises";

const input = await readFile("input", "utf8");

const arrInput = input.split("\n");
const dialArr = Array.from({ length: 99 }, (_, index) => index + 1);
let currentStep = dialArr[49];

arrInput.forEach((step) => {
  if (step.startsWith("L")) {
    // console.log(step);
  } else {
    // console.log(step);
  }
});
