// var hoisting
// first-class function 
'use strict'
const name = "brenden";
console.log(`hi ${name}`);
const ellie = {name: 'ellie', age: 20};
console.log(ellie);
 
ellie.age = 15;
ellie.name = 'geonwook';
console.log(ellie); 
// function is object
//   object이므로 메서드와 프로퍼티들을 확인할 수 있다.
// null == undefined -> true
// object는 같은 메모리를 참조할 때만 같다.. pointer라고 생각하면 될듯요.. function parameter 전달값도 뽀인떠
function changeName(obj){
    obj.name = "april";
}
changeName(ellie);
console.log(ellie.name);
// default parameters
function showMsg(msg, from = "geonwook"){
    console.log(`${msg}, ${from}`);
}
function showMsg(msg){
    console.log(`${msg}`);
}
showMsg("hello");

// rest parameters
// 전달된 복수의 parameter를 하나의 List로 처리 <...args>
function showNames(...names){
    for(const name of names) console.log(`${name}\n`);
}
showNames('ellie', 'minkyung', 'geonwook');

// function is assignable
function printIt(){console.log("hello world")}
print = printIt
print()

// arrow function 간결화
// anonymous function
const simplePrint = () => console.log("hello world");
// arrow 뒤에 {}을 쓰면 항상 return을 해야함
const multiply = (a, b) => {
    return a * b
}
// IIFE : Immediately Invoked Function Expression
(function hello(){
    console.log("hello world");
})()
