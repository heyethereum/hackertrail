process.stdin.resume();
process.stdin.setEncoding("utf8");

let [stdin, result, currentLine, inputString] = ["", "", 0, ""];

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

function parenthesisCheck(s) {
  // Write your code here
  let bracket = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];

  for (let char of s) {
    console.log("char:", char);
    console.log("bracket[char]:", bracket[char]);
    if (bracket[char]) {
      stack.push(bracket[char]);
      console.log("stack:", stack);
    } else {
      if (stack.pop() !== char) return "F";
    }
  }

  return !stack.length ? "T" : "F";
}

function main() {
  const s = readLine();

  const result = parenthesisCheck(s);

  console.log(result);
}
