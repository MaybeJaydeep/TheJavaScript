/*

Assignment 8: Typed Functions
Write a function with required and optional parameters
Define return types explicitly
Create a small utility function that would exist in a real project
Write a function with one required and one optional parameter
Call it with and without the optional argument
How does TypeScript enforce correctness here?

*/

const PlaneID: number = 23456;
const PlaneName: string = "SpiceJet";
const PlaneEngineFuel: string = "FuelJet";
const PlaneODOO: number = 230000;


function fly(PlaneID: number, PlaneEngineFuel: string, PlaneODOO: number, PlaneName?: string) {
    if (PlaneODOO === 500000) {
        console.log("Need service!...")
    }
    else console.log("Plane number: ", PlaneID, "PlaneEngineFuel: ", PlaneEngineFuel, "PlaneODOO: ", PlaneODOO, "is ready to fly!..");
}

//  fly(PlaneID,PlaneEngineFuel,PlaneODOO,PlaneName);
fly(PlaneID, PlaneEngineFuel, PlaneODOO);

/*
TypeScript enforces correctness here by checking types at compile time.

1. Variable types

const PlaneID: number = 23456; // must be number


Wrong type causes an error.

2. Function parameters

fly(number, string, number, string?)


Arguments must match these types and order.

3. Optional parameter

PlaneName?: string


It can be omitted, but if passed, must be a string.

Prevents wrong data types and argument mistakes before running code.


*/