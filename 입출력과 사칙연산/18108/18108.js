const fs = require("fs");

// 예제.txt 문자열로 입력 받는경우.
const input = fs.readFileSync("./예제.txt").toString();

function solutions(input) {
  console.log(Number(input) - 543);
}

solutions(input);
