console.log("start"); //sync

setTimeout(() => console.log("timeout"), 0); // macrotassk queue

Promise.resolve() //high priority queue -> microtask queue
  .then(() => console.log("promise 1"))
  .then(() => console.log("promise 2"));

console.log("end"); //sync

/*

output: 
start 
end
promise 1
promise 2
timeout

*/