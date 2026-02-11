/*
Assignment 5: Type Aliases
Create reusable aliases for union and intersection types
Refactor earlier assignments to use these aliases
Observe how readability improves
Create a type alias for string | number
Use it in two variables
How does this improve readability?
*/

type ID = number | string;
let accountNumber: ID = 12345;
let referenceCode: ID = "REF-908";
let orderId:ID = 10;

/*
type OrderBase = {
    orderId: number;
    amount: number;
};
*/
const OrderAlias = {
    orderId,
    amount:2345
}

// Separate types
type Person = {
    name: string;
};

type Employee = {
    empId: ID;
};

// Intersection alias combining both
type Staff = Person & Employee;

// Using intersection alias
let staffMember: Staff = {
    name: "Jaydeep",
    empId: 2001
};

/*
Using type aliases improves readability because:

- No need to repeat long type definitions.
- Code becomes cleaner and easier to understand.
- If type changes, update once in alias.
- Makes types reusable across project.
- Improves maintenance in large codebases.

Example:
Instead of writing:
string | number | boolean

You can simply write:
UserIdentifier

This makes code self-explanatory.
*/
