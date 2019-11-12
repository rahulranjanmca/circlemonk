---
id: start
title: Java Script Basics
sidebar_label: Basics
---

### What are primitive data types?
 A primitive data type is data that has a primitive value (which has no properties or methods). There are 5 types of primitive data types.
 
 1. string
 2. number
 3. boolean
 4. null
 5. undefined
---

### What is typeof operator?

 You can use the JavaScript typeof operator to find the type of a JavaScript variable. It returns the type of a variable or an expression.
    ```javascript
    typeof "Rahul Ranjan"     // Returns "string"
    typeof (1 + 2)        // Returns "number"
    ```
---
 
### What is the difference between == and === operators?
JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison. The strict operators takes type of variable in consideration, while non-strict operators make type correction/conversion based upon values of variables. The strict operators follow the below conditions for different types,
1. Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
2. Two numbers are strictly equal when they are numerically equal. i.e, Having the same number value.
   There are two special cases in this,
   1. NaN is not equal to anything, including NaN.
   2. Positive and negative zeros are equal to one another.
3. Two Boolean operands are strictly equal if both are true or both are false.
4. Two objects are strictly equal if they refer to the same Object.
5. Null and Undefined types are not equal with ===, but equal with ==. i.e,
    null===undefined --> false but null==undefined --> true

---
### What is undefined property?
The undefined property indicates that a variable has not been assigned a value, or not declared at all. The type of undefined value is undefined too.
```javascript
var user;    // Value is undefined, type is undefined
console.log(typeof(user)) //undefined
```
Any variable can be emptied by setting the value to undefined.
```javascript
user = undefined
```
---

### What is null value?
The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values. The type of null value is object.
You can empty the variable by setting the value to null.
```javascript
var user = null;
console.log(typeof(user)) //object
```
---

### What is Hoisting?
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation.
Let's take a simple example of variable hoisting,
```javascript
    console.log(message); //output : undefined
    var message = 'The variable Has been hoisted';
```
The above code looks like as below to the interpreter,
```javascript
    var message;
    console.log(message);
    message = 'The variable Has been hoisted';
```

### What is singleton pattern
A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.
```javascript
    var object = new function(){
      this.name = "Rahul";
    }
```

### What is the difference between let and var?
Below are the differences between let and var.

| var | let |
|---- | ---------
| It is been available from the beginning of JavaScript  | Introduced as part of ES6 |
| It has function scope | It has block scope  |
| Variables will be hoisted and initialized to undefined | Hoisted but not initialized |

Let's take an example to see the difference,
```js
function getUserDetails(username) {
   if(username) {
     console.log(salary); // undefined(due to hoisting)
     console.log(age); // error: age is not defined
     let age = 30;
     var salary = 10000;
   }
   console.log(salary); //10000 (accessible to due function scope)
   console.log(age); //error: age is not defined(due to block scope)
}
```
---

### What is Temporal Dead Zone?

The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone. Let's see this behavior with an example,
```javascript
function myMethod() {
  console.log(var1); // undefined
  console.log(var2); // ReferenceError
  var var1 = 1;
  let var2 = 2;
}
```
---

### What is the benefit of using modules?

There are a lot of benefits to using modules in favour of a sprawling. Some of the benefits are:

1. Maintainablity
2. Reusability
3. Namespacing
---


 
