/*
 Exercise 2: setTimeout in Loop (Fix the Bug)


**Task:** Fix the following code so it logs 0, 1, 2 instead of 3, 3, 3.

*/
for (var i = 0; i < 3; i++) {
 setTimeout(function() {
   console.log(i); // Currently logs: 3, 3, 3
 }, 1000);
}

// Fixed the code

for (let i = 0; i < 3; i++) {
 setTimeout(function() {
   console.log(i); // logs: 0, 1, 2
 }, 1000);
}

/*
Reason:
var is a global object and hoisted. So, it waits for the loop to complete. after loop completion, it becomes 3. 
Then, setTimeout runs. So, it logs 3 three times.

By using let, we make it a block scoped variable. So, now every iteration, i is reinitialized to 0. So, at
last it logs 0,1,2.
*/