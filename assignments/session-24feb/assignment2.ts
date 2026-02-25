/*

Assignment 2
Create FirstArgument<T> to extract first parameter type.
Test it with a function that takes (id: string, active: boolean) .

*/

type FirstArgument<T> = T extends (arg1: infer A,...args:any[]) => any ? A : never;

// Optional and Optimal 
// type FirstArgument<T extends (...args: any[]) => any> = Parameters<T>[0];

type myfunction = (id: string, active: boolean) => void;

type checkFirstArgurment = FirstArgument<myfunction>;

