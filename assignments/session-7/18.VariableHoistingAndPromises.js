console.log(a);
var a = 5;

Promise.resolve().then(() => {
    console.log(a);
});

a = 10;

/*

undefined
10

Explanation:
var a hoisted as undefined.
Then changed to 10 before microtask runs.

*/
