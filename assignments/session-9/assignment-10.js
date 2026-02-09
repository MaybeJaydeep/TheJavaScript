/*

10) Create a function simulateTask(name, delay) that returns a Promise resolving after delay ms.
Part A: Run three tasks sequentially using async/await.
Part B: Run three tasks simultaneously using Promise.all().
Compare the total time taken for Part A vs Part B.

*/

function simulateTask(name, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`${name} finished`);
      resolve();
    }, delay);
  });
}

/* Part A — Sequential */
async function sequential() {
  console.time("Sequential");
  await simulateTask("Task 1", 1000);
  await simulateTask("Task 2", 1000);
  await simulateTask("Task 3", 1000);
  console.timeEnd("Sequential");
}

/* Part B — Parallel */
async function parallel() {
  console.time("Parallel");
  await Promise.all([
    simulateTask("Task 1", 1000),
    simulateTask("Task 2", 1000),
    simulateTask("Task 3", 1000),
    simulateTask("Task 4", 1000)
  ]);
  console.timeEnd("Parallel");
}

sequential().then(parallel);
