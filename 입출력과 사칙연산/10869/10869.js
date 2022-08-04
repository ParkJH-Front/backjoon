const fs = require("fs");

// 예제.txt 문자열로 입력 받는경우.
const input = fs.readFileSync("./예제.txt").toString().trim();

//trim() : 문자열 좌우의 공백을 제거하는 함수

function solutions(input) {
  const answer = input + "??!";
  console.log(answer);
}

solutions(input);
