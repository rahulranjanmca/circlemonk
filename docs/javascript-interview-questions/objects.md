---
id: objects
title: Javascript Objects Interview Questions
sidebar_label: Objects
---

### What is the purpose of delete operator?
The delete keyword is used to delete the property as well as its value.
```javascript
var user= {name: "Rahul", age:30};
delete user.age;

console.log(user); // {name: "Rahul"}
```
---

### What is the purpose of seal method?
The Object.seal() method is used seal an object, by preventing new properties from being added to it and marking all existing properties as non-configurable. But values of present properties can still be changed as long as they are writable. Let's see the below example to understand more about seal() method
```javascript
const object = {
 property: 'Welcome JS world'
};
Object.seal(object);
object.property = 'Welcome to object world';
console.log(Object.isSealed(object)); // Welcome to object world
delete object.property; // You cannot delete when sealed
console.log(object.property); //Welcome to object world
```
---

### What are the applications of seal method?
Below are the main applications of Object.seal() method,
1. It is used for sealing objects and arrays.
2. It is used to make an object immutable.

---
### What are the differences between freeze and seal methods?
     If an object is frozen using the Object.freeze() method then its properties become immutable and no changes can be made in them whereas if an object is sealed using the Object.seal() method then the changes can be made in the existing properties of the object.

### How do you determine if an object is sealed or not?
The Object.isSealed() method is used to determine if an object is sealed or not. An object is sealed if all of the below conditions hold true
1. If it is not extensible.
2. If all of its properties are non-configurable.
3. If it is not removable (but not necessarily non-writable).
Let's see it in the action
```javascript
const object = {
property: 'Hello, Good morning'
};

Object.seal(object); // Using seal() method to seal the object

console.log(Object.isSealed(object));      // checking whether the object is sealed or not
```
---

### How do you get enumerable key and value pairs?
The Object.entries() method is used to return an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. Let's see the functionality of object.entries() method in an example,
```javascript
const object = {
a: 'Good morning',
b: 100
};

for (let [key, value] of Object.entries(object)) {
console.log(`${key}: ${value}`); // a: 'Good morning'
                                // b: 100
}
```
**Note:** The order is not guaranteed as object defined.

### What is the main difference between Object.values and Object.entries method?
The Object.values() method's behavior is similar to Object.entries() method but it returns an array of values instead [key,value] pairs.
```javascript
const object = {
a: 'Good morning',
b: 100
};

for (let value of Object.values(object)) {
console.log(`${value}`); // 'Good morning'
                             100
}
```
     
 ### How can you get the list of keys of any object?
You can use `Object.keys()` method which is used return an array of a given object's own property names, in the same order as we get with a normal loop. For example, you can get the keys of a user object,
```javascript
const user = {
name: 'John',
gender: 'male',
age: 40
};

console.log(Object.keys(user)); //['name', 'gender', 'age']
```
 ### How do you create an object with prototype?
The Object.create() method is used to create a new object with the specified prototype object and properties. i.e, It uses existing object as the prototype of the newly created object. It returns a new object with the specified prototype object and properties.
```javascript
const user = {
 name: 'John',
 printInfo: function () {
   console.log(`My name is ${this.name}.`);
 }
};

const admin = Object.create(person);

admin.name = "Nick"; // Remember that "name" is a property set on "admin" but not on "user" object

admin.printInfo(); // My name is Nick
```
