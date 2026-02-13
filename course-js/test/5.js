// function mkDelay(argMg) {
//   let endTime = Date.now() + argMg;
//   while (Date.now() < endTime) {}
//   console.log("# end - make delay");
// }

// console.log("1. 시작");
// // 비동기: 메인 스레드를 막지 않음
// setTimeout(() => console.log("2. 1초 후 실행"), 1000);
// mkDelay(3000);
// console.log("3. 끝 (2보다 먼저 출력됨)");
function mkDelay(argMg) {
  let endTime = Date.now() + argMg;
  while (Date.now() < endTime) {}
  return Math.random > 0.5;
}

let p = new Promise(
  // Executor(비동기 실행) -> user defined function
  (resolve, reject) => {
    console.log("start");
    // if (mkDelay(3000)) resolve("5");
    // else reject("F");
    setTimeout(() => {
      if (Math.random > 0.5) resolve("S");
      else reject("F");
    }, 3000);
    console.log("end");
  },
);
// Promise객체 생성 후 사용자로 부터 받은 함수를 실행

// p.then(/* OnResolved */, /* OnRejected */)
p.then(
  (result) => console.log(result),
  (error) => console.log(error),
);

// let p2 = new Promise();

// // TaskA -> TaskB -> TaskC -> TaskD
// p2.then().then().then().catch().finally()
