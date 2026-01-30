// class Student {
//   // 1) Instance Member variable
//   // 2) Instance Member method
//   // 3) Class  Member variable
//   // 4) Class Member method
//   static counter = 0;
//   // 생성자
//   constructor(argName) {
//     this.name = argName;
//   }
// }

// let std1 = new Student("kim");
// let std2 = new Student("lee");

// console.log(Student.counter); // kim lee

// class Bar{
//   constructor() {
//     this.x = 10
//   }
// }

// class Foo {
//   constructor() {
//     this.x = 20
//   }
// }

// bar1 = new Bar()
// foo1 = new Foo()
// console.log(bar1.prototype === foo1.prototype);

// class Student {
//   constructor() {
//     this.x = 2;
//   }
// }

// std1 = new Student();
// std2 = new Student();
// // Student.prototype.prtX = function () {
// //   console.log("X");
// // };
// std1.prtX();
// std2.prtX();

// class Person {
//   name = undefined;
//   age = undefined;
//   constructor(argName, argAge) {
//     this.name = argName;
//     this.age = argAge;
//   }

//   prtTnfo() {
//     console.log(`name: ${this.name}, age: ${this.age}`);
//   }
// }

// class Student extends Person {
//   dept = undefined;
//   constructor(argName, argAge, argDept) {
//     super(argName, argAge);
//     this.dept = argDept;
//   }

//   prtTnfo() {
//     super.prtTnfo();
//     console.log(`dept: ${this.dept}`);
//   }
// }

// class Car{
//   x = 10
//   y = 20
// }

// class Suv extends Car {
//   x = 200;
//   z = 30;
//   prtX = function () { } // this.prtX -> obj1에 저장됨
//   // 내부적으로 생성자 호출
//   // constructor() {
//   //   super()
//   // -> this.x = 10, this.y = 20
//   //   this.x = 200 -> override
//   //   this.z = 30
//   // }
// }

// obj1 = new Suv()
// console.log(obj1);
// console.log(`x: ${obj1.x}, y: ${obj1.y}, z: ${obj1.z}`);

// class Bar {
//   x = 2;
//   static y = 1;
//   static prtY() {
//     console.log(Bar.y);
//   }
// }

// Bar.prtY();

// obj1 = new Bar()
// obj2 = new Bar()

// Bar.y = 20

// console.log(Bar.y);
// console.log(obj1.y);
// console.log(obj2.y);

class Bar {
  #x = 2;
  set x(argX) {
    if (argX > 0) {
      this.#x = argX;
    }
  }

  get x() {
    return this.#x;
  }
}

obj = new Bar();
obj.x = 10;
console.log(obj.x);
