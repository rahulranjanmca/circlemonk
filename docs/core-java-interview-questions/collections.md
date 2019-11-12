---
id: collections
title: Java Collection Interview Question
sidebar_label: Collections

---

### What is the Collection framework in Java?
Collection Framework is a combination of classes and interface, which is used to store and manipulate the data in the form of objects. It provides various classes such as ArrayList, Vector, Stack, and HashSet, etc. and interfaces such as List, Queue, Set, etc. for this purpose.

---

### What are the main differences between array and collection?

Array and Collection are somewhat similar regarding storing the references of objects and manipulating the data, but they differ in many ways. The main differences between the array and Collection are defined below:


- Arrays are always of fixed size, i.e., a user can not increase or decrease the length of the array according to their requirement or at runtime, but In Collection, size can be changed dynamically as per need.
- Arrays can only store homogeneous or similar type objects, but in Collection, heterogeneous objects can be stored.
- Arrays cannot provide the ?ready-made? methods for user requirements as sorting, searching, etc. but Collection includes readymade methods to use.

---

### What is the difference between ArrayList and Vector?

| ArrayList | Vector |
|---- | ---------
|ArrayList is not synchronized.|Vector is synchronized.|
|ArrayList is not a legacy class.|Vector is a legacy class.|
|ArrayList increases its size by 50% of the array size.|Vector increases its size by doubling the array size.|
|ArrayList is not `thread-safe` as it is not synchronized.|Vector is `thread-safe` as it's every method is synchronized.|
