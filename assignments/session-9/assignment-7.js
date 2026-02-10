/*

7) Create a function tossCoin() that returns a Promise.
Resolve with "Heads" if a random number is greater than 0.5, otherwise reject with "Tails".
Consume the promise using .then() and .catch().


*/

function tossCoin() {
  return new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve("Heads") : reject("Tails");
  });
}

tossCoin()
  .then(result => console.log(result))
  .catch(err => console.log(err));
