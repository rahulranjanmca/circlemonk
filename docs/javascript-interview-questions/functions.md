---
id: functions
title: Javascript Function Questions
sidebar_label: Functions
---

### What are lambda or arrow functions?
An arrow function is a shorter syntax for a function expression and does not have its own **this, arguments, super, or new.target**. These function are best suited for non-method functions, and they cannot be used as constructors.

---

### What is a first class function?
In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener
```javascript
const handler = () => console.log ('This is a click handler function');
document.addEventListener ('click', handler);
```
---

### What is a first order function?

First-order function is a function that doesn’t accept other function as an argument and doesn’t return a function as its return value.
```javascript
const firstOrder = () => console.log ('I am a first order function!');
```
---

### What is a higher order function?
Higher-order function is a function that accepts other function as an argument or returns a function as a return value.
```javascript
const firstOrderFunc = () => console.log ('Hello I am a First order function');
const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc ();
higherOrder (firstOrderFunc);
```
---
### What is a unary function?
Unary function (i.e. monadic) is a function that accepts exactly one argument. Let us take an example of unary function. It stands for single argument accepted by a function.
```javascript
const unaryFunction = a => console.log (a + 10); //Add 10 to the given argument and display the value
```
---
### What is currying function?
Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, a multi argument function turns it into a unary function. Let's take an example of multi argument function and how it turns into a currying function
```javascript
const multiArgFunction = (a, b, c) => a + b + c;
const curryUnaryFunction = a => b => c => a + b + c;
curryUnaryFunction (1); // returns a function: b => c =>  1 + b + c
curryUnaryFunction (1) (2); // returns a function: c => 3 + c
curryUnaryFunction (1) (2) (3); // returns the number 6
```
Curried functions are great to improve code re-usability and functional composition.

---
### What is a pure function?
A **Pure function** is a function where the return value is only determined by its arguments without any side effects. i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value. Let's take an example to see the difference between pure and impure functions.
```js
//Impure
let numberArray = [];
const impureAddNumber = number => numberArray.push (number);
//Pure
const pureAddNumber = number => argNumberArray =>
  argNumberArray.concat ([number]);

//Display the results
console.log (impureAddNumber (6)); // returns 6
console.log (numberArray); // returns [6]
console.log (pureAddNumber (7) (numberArray)); // returns [6, 7]
console.log (numberArray); // returns [6]
```

As per above code snippets, Push function is impure itself by altering the array and returning an push number index which is independent of parameter value. Whereas Concat on the other hand takes the array and concatenates it with the other array producing a whole new array without side effects. Also, the return value is a concatenation of previous array. Remember that Pure functions are important as they simplify unit testing without any side effects and no need for dependency injection. They also avoid tight coupling and makes harder to break your application by not having any side effects. These principles are coming together with Immutability concept of ES6 by giving preference to const over let usage.

---

### What is an anonymous function?
An anonymous function is a function without a name. Anonymous functions are commonly assigned to a variable name or used as a callback function. The syntax would be as below.
 ```javascript
 function (optionalParameters) {
   //do something
 }

 const myFunction = function(){ //Anonymous function assigned to a variable
   //do something
 };

 [1, 2, 3].map(function(element){ //Anonymous function used as a callback function
   //do something
 });
 ```
Let's see the above anonymous function in an example.
 ```javascript
 var x = function (a, b) {return a + b};
 var y = x(10, 15);
 console.log(y); // 25
 ```
---

### What is a thunk function?
A thunk is just a function which delays the evaluation of the value. It doesn’t take any arguments but gives the value whenever you invoke the thunk. i.e, It is used not to execute now but it will be sometime in the future. Let's take a synchronous example:
 ```javascript
 const add = (x,y) => x + y;

 const thunk = () => add(2,3);

 thunk() // 5
 ```
---


