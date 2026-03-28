/*
Problem 8: Convert Object Keys to Uppercase
Objective
Transform object keys without mutating the original object.
Function
convertKeysToUpperCase(obj)

Requirements
Convert only top-level keys


Preserve values


Return a new object


Do not mutate original object


Expected Outcome
{ name: "A", age: 30 } → { NAME: "A", AGE: 30 }

*/

const convertKeysToUpperCase = obj =>
  Object.keys(obj).reduce((result, key) => {
    result[key.toUpperCase()] = obj[key];
    return result;
  }, {});

// Example
const input = { name: "A", age: 30 };
const output = convertKeysToUpperCase(input);

console.log(output); // { NAME: "A", AGE: 30 }
console.log(input);  // original unchanged
