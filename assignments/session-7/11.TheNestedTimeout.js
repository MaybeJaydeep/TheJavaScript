console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');

/*

Output:

Sync:
A
E

Microtask:
C
D

Macrotask:
B

*/