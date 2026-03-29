/*

Code Block 3: Multiple Microtasks

*/
console.log("A");


Promise.resolve().then(function() {
 console.log("B");
  Promise.resolve().then(function() {   // hold for E
   console.log("C");
 });
  console.log("D");
});


Promise.resolve().then(function() {
 console.log("E");
});


setTimeout(function() {
 console.log("F");
}, 0);


console.log("G");

/*

Prediction (order):
A
G
B
D
E
C
F

**Actual Output:**

A
G
B
D
E
C
F


**Explanation:**

1. Synchronous code runs first:
   console.log("A") → prints A
   console.log("G") → prints G

2. Promise callbacks go to the Microtask Queue.
   Two microtasks are queued:
   - First Promise → prints B
   - Second Promise → prints E

3. First microtask runs:
   Prints B
   Schedules another microtask (prints C)
   Then prints D synchronously inside the same callback.

4. Next microtask runs:
   Prints E

5. Newly added microtask runs:
   Prints C

6. Finally macrotask runs:
   setTimeout prints F.

*/