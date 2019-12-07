---
id: start
title: Algo And Data Structures Interview Questions
---

### Closest Pair of Points | O(nlogn) Implementation
### How to check if two given line segments intersect?
### How to check if a given point lies inside or outside a polygon?
### Convex Hull | Set 1 (Jarvis’s Algorithm or Wrapping)
### Convex Hull | Set 2 (Graham Scan)
### Given n line segments, find if any two segments intersect
### Check whether a given point lies inside a triangle or not

### How to check if given four points form a square

```java
public class Solution {
    public double dist(int[] p1, int[] p2) {
        return (p2[1] - p1[1]) * (p2[1] - p1[1]) + (p2[0] - p1[0]) * (p2[0] - p1[0]);
    }
    public boolean check(int[] p1, int[] p2, int[] p3, int[] p4) {
        return dist(p1,p2) > 0 && dist(p1, p2) == dist(p2, p3) && dist(p2, p3) == dist(p3, p4) && dist(p3, p4) == dist(p4, p1) && dist(p1, p3) == dist(p2, p4);
    }
    public boolean validSquare(int[] p1, int[] p2, int[] p3, int[] p4) {
        return check(p1, p2, p3, p4) || check(p1, p3, p2, p4) || check(p1, p2, p4, p3);
    }
}
```
