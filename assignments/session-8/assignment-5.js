// Code Block 5: Async/Await

console.log("Start");


async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}


asyncFunction();


Promise.resolve().then(function() {
 console.log("Promise 1");
});


setTimeout(function() {
 console.log("Timeout");
}, 0);


console.log("End");

/*

Your Prediction (order):

Start
End
Async 1
Promise 1
Async 2
Timeout


Actual Output:

Start
Async 1
End
Async 2
Promise 1
Timeout


**Explanation:**

1. Synchronous code runs first.
   console.log("Start") prints Start.

2. asyncFunction() is called.
   Inside it:
   console.log("Async 1") runs synchronously.
   The `await` pauses execution and schedules the remaining code
   (console.log("Async 2")) as a microtask.

3. Execution continues normally.
   Promise.then schedules another microtask.
   setTimeout schedules a macrotask.
   console.log("End") prints End.

   Output so far:
   Start
   Async 1
   End

4. Microtasks now execute.
   The continuation after await runs first → prints Async 2.
   Then Promise.then runs → prints Promise 1.

5. Finally, macrotask runs.
   setTimeout prints Timeout.

*/