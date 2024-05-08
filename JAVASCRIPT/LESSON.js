// 변수의 선언
let y = 10; // ブロックスコープを持つ変数（ES6以降）
const z = 15; // 定数（ES6以降）

// 출력
console.log();

// 입력 받기
let name = prompt("あなたの名前は何ですか？");
console.log("こんにちは、" + name + "さん！");


// if문
let age = 20;

if (age < 18) {
    console.log("未成年です");
} else if (age >= 18 && age < 65) {
    console.log("成人です");
} else {
    console.log("シニアです");
}


// for, while, do-while
for (let i = 0; i < 5; i++) {   //　初期化式; 条件式; 更新
    console.log(i);
}
//
let j = 0;
while (j < 5) {
    console.log(j);
    j++;    // 変数＋＋　⇒　変数　+=
}


// def関数みたいなやつ
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("World");
// 출력 값->  Hello, World!


// 배열 
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // "Apple"
//
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name); // "John"


// 이벤트처리 
//html
<button onclick="alert('Button clicked')">Click me</button>