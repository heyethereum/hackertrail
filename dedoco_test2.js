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

function checkNeighbours(row, col, matrix) {
  let sum = 0;
  function flip(index) {
    if (index < 0) return matrix.length - 1;

    return index > matrix.length - 1 ? 0 : index;
  }
  function isOne(one) {
    return one ? 1 : 0;
  }
  // up
  sum += isOne(matrix[flip(row - 1)][col]);
  // down
  sum += isOne(matrix[flip(row + 1)][col]);
  //left
  sum += isOne(matrix[row][flip(col - 1)]);
  // right
  sum += isOne(matrix[row][flip(col + 1)]);
  //top left
  sum += isOne(matrix[flip(row - 1)][flip(col - 1)]);
  //top right
  sum += isOne(matrix[flip(row - 1)][flip(col + 1)]);
  //bottom left
  sum += isOne(matrix[flip(row + 1)][flip(col - 1)]);
  //bottom right
  sum += isOne(matrix[flip(row + 1)][flip(col + 1)]);

  return sum;
}

function isLiveCell(matrix) {
  let time = 0,
    liveCells = 0;

  while (time < 100) {
    let liveMatrix = new Array(5).fill().map(function () {
      return new Array(5).fill(0);
    });
    liveCells = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const neighbours = checkNeighbours(i, j, matrix);
        // console.log("neighbours:", neighbours);
        if (neighbours == 2) {
          liveMatrix[i][j] = matrix[i][j];

          if (liveMatrix[i][j]) liveCells++;
        } else if (neighbours == 3) {
          liveMatrix[i][j] = 1;
          liveCells++;
        } else {
          liveMatrix[i][j] = 0;
        }
      }
    }
    matrix = liveMatrix;
    time++;
  }
  return liveCells > 0 ? "YES" : "NO";
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  //console.log("n:", n);

  for (let i = 0; i < n; i++) {
    let matrix = new Array(n).fill(new Array(5).fill(0));
    for (let j = 0; j < 5; j++) {
      matrix[i][j] = readLine()
        .replace(/\s+$/g, "")
        .split("")
        .map((matrixTemp) => parseInt(matrixTemp, 10));
    }
    //console.log(matrix[i]);

    const result = isLiveCell(matrix[i]);

    console.log(result);
  }
}
