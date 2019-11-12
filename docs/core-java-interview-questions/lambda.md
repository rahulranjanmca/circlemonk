---
id: lambda
title: Java Lambda Interview Question
sidebar_label: Lambda

---

### What is Lambda Expression?
Lambda Expression is an anonymous function which accepts a set of input parameters and returns results.

Lambda Expression is a block of code without any name, with or without parameters and with or without results. This block of code is executed on demand.

---

### What are the three parts of a Lambda Expression? What is the type of Lambda Expression?

A Lambda Expression contains 3 parts:
- **Parameter List**: 
A Lambda Expression can contain zero or one or more parameters. It is optional.

- **Lambda Arrow Operator**: "->" is known as Lambda Arrow operator. It separates parameters list and body.

- **Lambda Expression Body**: 
    The type of “Journal Dev” is java.lang.String. The type of “true” is Boolean. In the same way, what is the type of a Lambda Expression?

    The Type of a Lambda Expression is a Functional Interface.

Example:- What is the type of the following Lambda Expression?

```java
() -> System.out.println("Hello World");
```

This Lambda Expression does not have parameters and does return any results. So it’s type is `java.lang.Runnable` Functional Interface or It can be of any type whose signature is matching.

---

### What is a Functional Interface? What is SAM Interface?

A Functional Interface is an interface, which contains one and only one abstract method. Functional Interface is also know as SAM Interface because it contains only one abstract method.

SAM Interface stands for Single Abstract Method Interface. Java SE 8 API has defined many Functional Interfaces.

---

### Is is possible to define our own Functional Interface? What is @FunctionalInterface? What are the rules to define a Functional Interface?

Yes, it is possible to define our own Functional Interfaces. We use Java SE 8’s @FunctionalInterface annotation to mark an interface as Functional Interface.
We need to follow these rules to define a Functional Interface:

- Define an interface with one and only one abstract method.
- We cannot define more than one abstract method.
- Use @FunctionalInterface annotation in interface definition.
- We can define any number of other methods like Default methods, Static methods.
- If we override java.lang.Object class’s method as an abstract method, which does not count as an abstract method.

---

### What is Predicate?

This is a functional interface which represents a predicate (boolean-valued function) of one argument.

It's functional method is `test(Object)`.

---

### What is Consumer in Java?

This is a functional interface which represents an operation that accepts a single input argument and returns no result. Unlike most other functional interfaces, Consumer is expected to operate via side-effects.

It's functional method is `accept(Object)`.

---

### What is Function in Java?

This is a functional interface  which represents a function that accepts one argument and produces a result.
It's functional method is `apply(Object)`.

---

### What is Supplier in Java?

Represents a supplier of results.
There is no requirement that a new or distinct result be returned each time the supplier is invoked.

This is a functional interface whose functional method is `get()`.




