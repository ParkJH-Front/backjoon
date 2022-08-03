const nums = [100, 200, 300, 400, 500];

// js Array Method
// 1) pop: 배열의 가장 마지막 인덱스 삭제
// 2) push: 배열의 가장 마지막 인덱스에 삽입
// 3) unshift: 배열의 가장 앞 인덱스에 삽입
// 4) shuft : 배열의 가장 앞 인덱스 삭제
// 5) splice(index, 제거 인덱스 갯수, 추가 인덱스) : 배열의 특정 위체에 요소 추가 or 삭제
nums.pop();
nums.pop();

console.log(nums);
// [ 100, 200, 300 ]
