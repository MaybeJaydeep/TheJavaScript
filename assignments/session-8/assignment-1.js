/* Task 1: Predict Output of Async Code

Objective
Predict the execution order of asynchronous code involving Promises, setTimeout, and the event loop.


Requirements
1. Predict the output order for each code block
2. Run the code and compare with your prediction
3. Explain the execution order based on the event loop


Code Block 1: Basic Async
*/

console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


Promise.resolve().then(function() {
 console.log("3");
});


console.log("4");


/*
Your Prediction (order):

1,4,3,2


Actual Output:
1,4,3,2


**Explanation:**

Priority order for execution:

Call Stack   >     Microtask Queue    >   Macrotask Queue

Therefore sync 1 -> Macrotask Queue 2 -> Microtask Queue 3 -> sync 4

prints 1,4 and Call Stack is empty -> then prints microtask queue element 3  -> microtask queue empty  -> then macrotask queue 2 prints 

*/
