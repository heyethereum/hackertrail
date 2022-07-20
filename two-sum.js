process.stdin.resume();
process.stdin.setEncoding("utf8");

let stdin = "",
  result = "";
let currentLine = 0;
let inputString = "";

function readLine() {
  return inputString[currentLine++];
}

process.stdin.on("data", function (chunk) {
  stdin += chunk;
});

process.stdin.on("end", function () {
  inputString = stdin.split("\n");

  main();
});

const twoSum = (numsArray, target) => {
  for (let i = 0; i < numsArray.length; i++) {
    for (let j = i + 1; j < numsArray.length; j++) {
      if (numsArray[i] + numsArray[j] == target) {
        return `${i},${j}`;
      }
    }
  }
};

const threeSum = (numsArray, target) => {
  for (let i = 0; i < numsArray.length; i++) {
    for (let j = i + 1; j < numsArray.length; j++) {
      for (let k = j + 1; k < numsArray.length; k++) {
        if (numsArray[i] + numsArray[j] + numsArray[k] == target) {
          return `${i},${j},${k}`;
        }
      }
    }
  }
};

function main() {
  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
  const n = firstMultipleInput[0];
  const target = firstMultipleInput[1];
  let numsArray = [];

  for (let i = 0; i < n; i++) {
    numsArray.push(parseInt(readLine().trim(), 10));
  }

  const result =
    numsArray.length < 9
      ? twoSum(numsArray, target)
      : threeSum(numsArray, target);

  console.log(result);
}
