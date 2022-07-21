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

function largestSubarray(s) {
  // Write your code here
  let maxLength = 0;
  let ending = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    let zero = 0,
      one = 0;

    for (let j = i; j < s.length; j++) {
      if (s[j] == 0) {
        zero++;
      } else {
        one++;
      }

      if (zero == one) {
        maxLength = Math.max(maxLength, j - i + 1);
        ending = Math.max(ending, j);
      }
    }
  }
  start = ending - maxLength;
  if (start < 0) {
    start = 0;
    ending += 1;
  }
  // console.log("start:", start);
  // console.log("ending:", ending);
  // console.log("maxLength", maxLength);

  return s.slice(start, ending).join(" ");
}

function main() {
  const s = readLine().replace(/\s+$/g, "").split(" ");

  // console.log(s);

  const result = largestSubarray(s);

  console.log(result);
}
