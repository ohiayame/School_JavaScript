// let myList = [10, 20, 30];

// for (value of myList) {
//     console.log(value);
// }

// for (let i = 0; i < myList.length; i++) {
//     console.log(myList[i]);
// }

// let myList1 = [100, 200, 300];
// myList1[5] = 20;
// for (let i = 0; i < myList1.length; i++) {
//   console.log(myList1[i]);
// }

// console.log(myList1.length === Object.keys(myList1).length);
// console.log(myList2[1], typeof myList2);

// let myMap = new Map();

// myMap.set(10, "A");
// myMap.set(1, "B");

// console.log(myMap.get(10));
// console.log(myMap.get(1));

// let mySet = new Set()
// while (mySet.size < 6){
//     random생성
//     mySet.add(random)
// }

// let myList = [10, 20, 30, 40];

// 1) 출력
// for (let i = 0; i < myList.length; i++) {
//   console.log(myList[i]);
// }

// // 2) +1
// for (let i = 0; i < myList.length; i++) {
//   myList[i] += 1;
// }
// // 3) 출력
// for (let i = 0; i < myList.length; i++) {
//   console.log(myList[i]);
// }

// // 4) +2
// for (let i = 0; i < myList.length; i++) {
//   myList[i] += 2;
// }
// // 5) 출력
// for (let i = 0; i < myList.length; i++) {
//   console.log(myList[i]);
// }

// function
// function forEach(argArray) {
//   for (let i = 0; i < argArray.length; i++) {
//     console.log(argArray[i]);
//   }
// };

// function map(argArray, argAddValue) {
//   for (let i in argArray) {
//     argArray[i] += argAddValue;
//   }
// }

// function map(argArray, argFn) {
//   for (let i in argArray) {
//     argArray[i] = argFn(argArray[i]);
//   }
// }

// function forEach(argArray, argFn) {
//   for (let i = 0; i < argArray.length; i++) {
//     argFn(argArray[i]);
//   }
//   console.log();
// }

// forEach(myList, (v) => process.stdout.write(`${v}\t`));
// forEach(myList, (v) => console.log(`${v}\t`));
// myList.forEach((v) => console.log(`${v}\t`));
// // map(myList, v => v + 1);
// myList = myList.map((v) => {
//   return v + 1;
// });
// myList.forEach((v) => console.log(`${v}\t`));
// // map(myList, (v) => v + 2);
// myList = myList.map((v) => v + 2);
// myList.forEach((v) => console.log(`${v}\t`));


