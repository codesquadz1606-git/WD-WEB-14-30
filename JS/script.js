// console.log("Hello Everyone") // this is the function which prints the element

// Chapter No 1 : Introduction to JS
// console.log("Hello Everyone\nMy name is Ayush");
// console.log("Hello Everyone\tMy name is Ayush");

// console.log(10+10)

// console.log("Sum of 10 +10 is",10+10,"Multiplication of same is",10*10)

// Template Literal : `Sentence ${operation}`
// console.log(`Sum of 10 +10 is ${10+10} Multiplication of same is ${10*10}`)

// Chapter 2 : Variable , Datatype , Keyword & User-Input

// What is variable?
// Variable is container that stores some value at the memory.
// var_name = value

// a=10;
// What is data type?
// Identifies which type of value is stored in a variable.
// 1. Number : int & float
// 2. String : Any character inside ""
// 3. Boolean : True or false
// 4. Null : Which has null type value
// 5. undefined : which has no value.

// b=98.76
// c="Ayush"
// d=true
// e=undefined
// f=null

// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))
// console.log(typeof(d))
// console.log(typeof(e))
// console.log(typeof(f))

// let (ES6) var const

// Var can re-declare & re-intialize again & again
// var a=10
// var a=100
// console.log(a)

// In let it cannot re-declare again & again but can re-initialize
// let a=10
// let a=100 // not allowed
// a=100 // allowed
// console.log(a)

// Const cannot be changed.
// const a=100;
// a=200 // not allowed because it is constant variable
// const a=200; // not allowed
// console.log(a)

// User input means assigning the value to the variable at the time of execution.
// prompt() byy default returns the string value.
// Now to convert string to number we use typecasting : parseInt(),parseFloat()

let a=parseInt(prompt("Enter a:"))
let b=parseInt(prompt("Enter b:"))

console.log(a+b)