/*
Assignment 1: Type Inference
1. Declare variables using let and const with initial values and observe inferred types
2. Try reassigning incompatible values and note the compiler errors
3. Write a function without a return type and inspect what TypeScript infers
*/

    let count = 10; // number   

    let variable; // any

    const sum = 10; // number & const

    console.log(typeof(count));  // number

    console.log(typeof(variable)); // "undefined" as it was compiled into js and it is undefined type

    console.log(typeof(sum));  // number

    count = 50; // allowed of reassignment of number type

    // count = "Jaydeep"; Not allowed as it was predefined at inital assignment

    variable = "Jaydeep";  // now it is assigned with string 

    console.log(typeof(variable));  // string 

    /* Note: it is loosely coupled same as js, should be discouraged in ts
    
    function abcd(count , sum){             // warnings that "count" and "sum" are implicitly typeof "any"
        return count + sum;
    }

    console.log(typeof(abcd(count, sum)));  // "number" as both are number

    console.log(typeof(abcd(count, variable))) // "string" as "variable" is of typeof "string"

    */

    //Correct declaration
    function resultOfAddition( parameter1: number, parameter2: number): number{
        return parameter1 + parameter2;
    }

    const result = resultOfAddition(count, sum);

    console.log("Result: ", result);