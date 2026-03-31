/*

2. Basic Promise Flow

Promise .then() runs in microtask queue, after sync code.

1 (sync)
3 (sync)
2 (microtask)

*/
console.log("2.Basic Promise Flow:")
console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);
