// Code Block 4: Complex Async Chain

console.log("1");

setTimeout(function() {
 console.log("2");
}, 0);


queueMicrotask(function() {
 console.log("3");
});

Promise.resolve().then(function() {
 console.log("4");
  queueMicrotask(function() {
   console.log("5");
 });
});

setTimeout(function() {
 console.log("6");
}, 0);

console.log("7");


/*

Prediction (order):

1
7
3
4
5
2
6


Actual Output:

1
7
3
4
5
2
6

**Explanation:**

1. Synchronous code runs first.
   console.log("1") prints 1.
   Two setTimeout callbacks are scheduled (macrotasks).
   queueMicrotask schedules a microtask. (this is where promises resides)
   Promise.then schedules another microtask.
   console.log("7") prints 7.

   Output so far:
   1
   7

2. Microtasks execute next in queue order.
   queueMicrotask runs first → prints 3.

3. Promise.then runs next → prints 4.
   Inside it, another microtask is scheduled to print 5.

4. Newly added microtask runs immediately after → prints 5.

5. After all microtasks finish, macrotasks run.
   First setTimeout prints 2.
   Second setTimeout prints 6.

*/