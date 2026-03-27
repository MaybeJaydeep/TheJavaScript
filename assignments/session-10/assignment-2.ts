/*
Assignment 2: any vs unknown
Create a function that accepts any and performs operations without checks
Create the same function using unknown and add proper type guards
Compare the compiler behavior and runtime safety
Create one variable using any
Create another variable using unknown
Try calling methods directly on both
Which one forces you to write safer code?
*/

/* Note: it is loosely coupled same as js, should be discouraged in ts
    
    function abcd(count , sum){             // warnings that "count" and "sum" are implicitly typeof "any"
        return count + sum;
    }

    console.log(typeof(abcd(count, sum)));  // "number" as both are number

    console.log(typeof(abcd(count, variable))) // "string" as "variable" is of typeof "string"

    */

function addition(a: unknown, b: unknown): void {
  if (typeof a === "number" && typeof b === "number") {
    console.log("Sum: ", a + b);
  } else console.log("Invalid types passed in function");
}

const a: unknown = 10;
const b: unknown = 20;

const anyA: any = "10";
const anyB: any = 20;

function additionAny(a: any, b: any): void {
  console.log("Sum:", a + b);
}

additionAny(a, b); // 30
additionAny(anyA, b); // 1020
additionAny(anyA, {}); // weird output or runtime issues "10[object, Object]"

/*

    Aspect	                              any	                            unknown
Compiler behavior	        Compiler skips type checking	    Compiler enforces type checking
Need for type guards	            Not required	              Required before operations
Compile-time safety	                ❌ No safety	                ✅ Strong safety
Runtime safety	             ❌ Errors likely at runtime	        ✅ Fewer runtime errors
Developer responsibility	    Fully manual	                Compiler forces safe handling
Recommended usage	            Rare, temporary	                Preferred for unknown data

4. Which Forces Safer Code?

Using unknown forces safer code because:

Compiler blocks unsafe operations.

Developer must validate types.

Runtime errors reduce.

*/
