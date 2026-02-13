// let p1 = new Promise((resolve, reject) => {
//     console.log("Executor function is invoked!");
//     reject(5)
// });

// p1.then(
//   (result) => {console.log("S: ", result);},
//   (error) => {console.log("F: ", error);},
// );

new Promise((resolve, reject) => {
  // resolve(4);
  reject("abc");
})
  .then(
    (result) => {
      console.log(result);
      // 새로운 Promise객체에 reject로 Error 객체를 저장해 반환
      throw new Error("Errorrrrrrrr");
    },
    (error) => {
      console.log(error);
      return Promise.reject("reject then"); // 새로운 Promise객체 반환 -> catch 호출
      // 만약에 return "reject then"일 경우 resolve가 됨
      // resolve 반환 -> *다음에 result가 있어야 실행이 됨
    },
  )
  .then(
    null, // 위에서 resolve를 반환해도 동작 안함
    (error) => {
      // 위에서 오류가발생하면 처리
      console.log(error);
    },
  )
  .catch((error) => {
    // then에서 처리 못한 오류의 예외처리
    console.log(`catch: ${error}`);
  })
  .finally((result) => {
    // 항상 실행 *매개변수 못받음
    console.log(`finally: ${result}`);
  });