const numbers = [-10, 20, 50, -5];

const result = numbers
  .filter(n => n > 0)
  .map(n => n * 2);

console.log(result);