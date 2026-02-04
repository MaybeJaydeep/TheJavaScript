// Explain the execution order



// Code Block 2: Nested Async


console.log("Start");


setTimeout(function() {
 console.log("Timeout 1");
  Promise.resolve().then(function() {
   console.log("Promise 1");
 });
}, 0);


Promise.resolve().then(function() {
 console.log("Promise 2");
  setTimeout(function() {
   console.log("Timeout 2");
 }, 0);
});


console.log("End");

/*

Prediction (order):

Start
End
Promise 2
Timeout 2
Timeout 1
Promise 1


Actual Output:

Start
End
Promise 2
Timeout 1
Promise 1
Timeout 2

Explanation:

JavaScript execution order:
Synchronous code → Microtasks (Promises) → Macrotasks (setTimeout).

1. "Start" and "End" run first (synchronous).
2. Promise runs next → prints "Promise 2" and schedules Timeout 2.
3. First timeout runs → prints "Timeout 1" and schedules Promise 1.
4. Microtasks run again → prints "Promise 1".
5. Remaining timeout runs → prints "Timeout 2".

*/