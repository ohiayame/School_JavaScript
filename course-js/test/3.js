// let myList = [10, 20, 30];

// // forEach 반복 -> 함수 호출
// function forEach(argArray, argFn) {
//   // 반복
//   for (let i = 0; i < argArray.length; i++) {
//     // 호출
//     argFn(argArray[i]);
//   }
// }

// // map 반복 -> 함수 호출 반환값 저장
// function map(argArray, argFn) {
//   // 반복
//   for (let i = 0; i < argArray.length; i++) {
//     // 함수 호출 => 반환값 저장
//     argArray[i] = argFn(argArray[i]);
//   }
// }

// // 1) forEach 호출 -> 각 값 출력
// forEach(myList, (v) => console.log(v));

// // 2) map 호출 -> 각 값 에 +1
// map(myList, (v) => v + 1);
// // forEach 호출 -> 각 값 출력
// forEach(myList, (v) => console.log(v));

// // 3) map 호출 -> 각 값 에 +1
// map(myList, (v) => v + 2);
// // forEach 호출 -> 각 값 출력
// forEach(myList, (v) => console.log(v));

// myList.forEach((v) => console.log(v));
// myList = myList.map((v) => v + v);
// myList.forEach((v) => console.log(v));

// for (let index = 0; index < 3; index++) {
//   myList = myList.map((v) => v + index);
//   myList.forEach((v) => console.log(v));
// }

// let myList = [10, 299, 30, 400];

// function filter(argList, argFn) {
//     let newList = []
//     // 배열을 반복하고 조건에 맞으면 새로운 리스트에 추가
//     for (let index = 0; index < argList.length; index++) {
//         if (argFn(argList[index])) {
//           newList.push(argList[index]);
//         }
//     }
//     // 새로운 배열 반환
//     return newList
// }

// // 100이상 값들 만 리스트로 생성
// // let newLi1 = myList.filter((v) => v >= 100);

// console.log(filter(myList, (v) => v >= 100));

let myList = [10, 20, 30];

let newList = myList.map((v) => v * 10);
// console.log(myList, newList);
// function forEach(argArray, argFn) {
//     for (const value of argArray) {
//         argFn(value);
//     }
// }
// let myFn = function (argValue){
//     console.log(argValue);
// }
// forEach(myList, myFn)

function map(argList, argFn) {
  // 배열 순회
  for (index in argList) {
    // 사용자 함수의 반환값을 현재 요소 값으로 치환
    // -> 함수 호출시 현 요소값을 전달
    argList[index] = argFn(argList[index]);
  }
}

// let myFn = function (argValue) {
//   return argValue * 10;
// };

map(myList, (argValue) => argValue * 10);
// console.log(myList);

// let bar = 3;

// function addOne(argBar) {
//     argBar = argBar + 1;
//   return argBar;
// }
// // console.log(addOne(bar), bar);

// class Student{
//     name = undefined
//     constructor(argName){this.name = argName;}
// }

// const std1 = new Student("gsc");
// const std2 = new Student("yju");

// function setName(argStd, argName) {
//     argStd.name = argName
// }

// setName(std1, "GSC Hello")
// setName(std2, "YJU Hello");

// console.log(`Std1: ${std1.name}\tStd2: ${std2.name}`);




// let myList = [10, 20, 30];
let newli = myList.filter((v) => v > 200)
console.log(newli);

myList.forEach(v => {
    console.log("--------------");
    console.log(v);
})