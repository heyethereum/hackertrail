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

function palindromeIndex(s) {
  // Write your code here
  let stringLength = s.length;
  if (stringLength <= 1) return `F`;

  let mid = Math.floor(stringLength / 2);

  for (let i = 0; i < mid; i++) {
    // pointer at both ends string, if same, continue
    if (s.charAt(i) == s.charAt(stringLength - 1 - i)) continue;
    else return `F`;
  }
  return `T`;
}

function main() {
  const s = readLine();

  const result = palindromeIndex(s);

  console.log(result);
}
