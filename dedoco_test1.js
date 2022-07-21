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

function lexicograph(s) {
  // Write your code here
  return s
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
}

function main() {
  const s = readLine();

  const result = lexicograph(s);

  console.log(result);
}
