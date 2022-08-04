const fs = require("fs");

// 예제.txt 문자열로 입력 받는경우.
const input = fs.readFileSync("./예제.txt").toString().split("");

function solutions(input) {
  console.log(typeof input); //["1", " ", "2"];
  console.log(input); // String

  console.log(Number(input[0]) + Number(input[2]));
}

solutions(input);
