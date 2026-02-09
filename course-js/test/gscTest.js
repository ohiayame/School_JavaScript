import { Student } from "./gsc/student.js";
let stdList = [];

stdList.push(new Student("kim", 20, "F"));
stdList.push(new Student("lee", 19, "M"));
stdList.push(new Student("jung", 35, "F"));
stdList.push(new Student("jeo", 40, "M"));

// // 남자의 나이를 더한 값
let sumAge = stdList
  .filter((v) => v.gender === "M")
  .reduce((acc, v) => (acc += v.age), 0);
console.log(sumAge);

console.log("─".repeat(56));

// every: 모든 요소가 조건을 만족하면 true
console.log(stdList.every((v) => v.gender == "M"));
// some: 하나라도 조건을 만족하면 true
console.log(stdList.some((v) => v.age <= 19));

console.log("─".repeat(56));

// // 나이 오름차순 / 내림차순 b.age - a.age
// let sortedList = stdList.sort((a, b) => a.age - b.age);
// sortedList.forEach((v) => console.log(v));

console.log("─".repeat(56));

// reduce => 누적 계산
//  acc: 누적된 값, v:현재 값, 0: acc시작 값
//  return이 필수 (if문 사용시 else필수)
console.log(
  stdList.reduce((acc, v) => (v.gender === "F" ? acc + v.age : acc), 0),
);

// 제일 젊은 사람 조회
console.log(stdList.reduce((min, v) => (min.age < v.age ? min : v.age)));
console.log(Math.min(...stdList.map((v) => v.age))); // 객체 무시 나이만
// sort를 사용해 첫번째 값을 출력 -> [...]로 복사를 해야 원본 배열 유지
console.log([...stdList].sort((a, b) => a.age - b.age)[0]);
// stdList.forEach((v) => console.log(v));

console.log("─".repeat(56));

// 조건을 만족하는 첫 번째 요소 반환
console.log(stdList.find((v) => v.age > 25));

// findIndex: 조건을 만족하는 첫 번째 요소의 인덱스
console.log(stdList[stdList.findIndex((v) => v.name === "kim")].age);
