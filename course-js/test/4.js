// class Student {
//   #name = undefined;
//   #age = undefined;

//   getName() {
//     return this.#name;
//   }
//   setName(argName) {
//     this.name = argName;
//   }

//   getAge() {
//     return this.#age;
//   }
//   setAge(argAge) {
//       if (argAge >= 0 && argAge <= 150) {
//           this.#age = argAge;
//           return true
//       }
//       return false
//   }
// }

// let std1 = new Student();
// std1.setName("gsc")
// console.log(std1.getName());


class Student {
  #name = undefined;
  #age = undefined;
    constructor(argName, argAge) {
        this.#name = argName
        this.#age = argAge
    }
    get name() { return this.#name }
    get age() { return this.#age }
    
    set name(argName) { this.#name = argName + " Hello"; }
    set age(argAge) { this.#age = `Age: ${argAge}`; }
}

let std1 = new Student("gsc", 20);
console.log(std1.name, std1.age);
std1.name = "YJU"
std1.age = 50

console.log(std1.name, std1.age);