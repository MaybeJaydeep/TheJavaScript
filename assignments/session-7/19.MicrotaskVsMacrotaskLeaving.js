setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

console.log("End");


/*
output:

End
P1
P2
T1
T2

Explanation:
Sync -> Microtasks -> Macrotasks.

*/