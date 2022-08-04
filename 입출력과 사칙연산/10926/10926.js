const fs = require("fs");

// 예제.txt 문자열로 입력 받는경우.
const input = fs.readFileSync("/dev/stdin").toString().split("");

function solutions(input) {
  const A = Number(input[0]);
  const B = Number(input[2]);

  if (0 < A && B < 10) {
    console.log(A + B);
    console.log(A - B);
    console.log(A * B);
    console.log(A / B);
    console.log(A % B);
  }
}

solutions(input);
