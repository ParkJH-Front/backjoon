// 첫 줄에 물품의 수 N과 준서가 버틸 수 있는 무게 K가 주어진다.
// 두 번째 줄부터 N개의 줄에 거쳐 각 물건의 무게 W와 해당 물건의 가치 V가 주어진다.
// 입력으로 주어지는 모든 수는 정수이다.

const { SlowBuffer } = require("buffer");
const fs = require("fs");

const input = fs.readFileSync("./test.txt").toString().trim().split("\r\n");

function data(input) {
  // console.log(input); [ '4 7', '6 13', '4 8', '3 6', '5 12' ]
  const fLine = [input.shift()].toString().split(""); //[ '4 7' ]
  const sLine = input; //[ '6 13', '4 8', '3 6', '5 12' ]

  const N = fLine[0]; //4
  const K = fLine[2]; //7
  const W = sLine.map((item) => {
    return item.toString().split("")[0];
  }); //[ '6', '4', '3', '5' ]
  const V = sLine.map((item) => {
    return item.toString().split("")[2];
  }); //[ '1', '8', '6', '1' ]

  solution(N, K, W, V);
}

function solution(N, K, W, V) {
  console.log(N, K, W, V);
}

data(input);
