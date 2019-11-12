---
id: threading
title: Java Threading Interview Questions
sidebar_label: Threading
---

### Is ++ (increment) or -- (decrement) operator thread-safe in Java?
No. Neither increment operator (++) nor the decrement operaor (--) is thread safe.

For example, the statement i++ is not atomic. It involves multiple instructions that includes reading the value of i variable, increment its value by 1 and store the new i value to the variable.

### What is Semaphore?

A semaphore controls access to a shared resource through the use of a counter. If the counter is greater than zero, then access is allowed. If it is zero, then access is denied. What the counter is counting are permits that allow access to the shared resource. Thus, to access the resource, a thread must be granted a permit from the semaphore.

---

### What is CountDownLatch?


### What is CyclicBarrier?


### What is Mutex? What all ways you can use Mutex.

Some way for mutex.
- Synchronized method
- Synchronized block
- Reentrant Lock
- Semaphore





