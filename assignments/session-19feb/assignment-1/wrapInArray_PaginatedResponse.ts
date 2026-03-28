/*

Assignment 1
Create a generic function called wrapInArray that accepts any value and returns it inside an
array.
Create a generic interface PaginatedResponse<T> with properties:
items: T[]
total: number

*/

function wrapInArray<T>(value: T): T[] {
    return [value];
}

// Usage examples
const numArray = wrapInArray<number>(10);
console.log(numArray); // [10]

const strArray = wrapInArray("Hello");
console.log(strArray); // ["Hello"]

const objArray = wrapInArray({ name: "Jaydeep" });
console.log(objArray); // [{ name: "Jaydeep" }]

// Generic interface
interface PaginatedResponse<T> {
    items: T[];
    total: number;
}

const numberResponse: PaginatedResponse<number> = {
    items: [1, 2, 3, 4],
    total: 4
};