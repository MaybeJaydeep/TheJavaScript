/*

Assignment 5
Create a type ReadOnlyUser where all properties are readonly.
Create a type StringifiedUser where all properties become string.
Create a type OptionalAndNullableUser where all properties are optional and nullable.

*/

type User = {
    id: number;
    name: string;
    isActive: boolean;
};

type ReadOnlyUser = {
    readonly [K in keyof User]: User[K];
};

const user1: ReadOnlyUser = {
    id: 1,
    name: "Jaydeep",
    isActive: true
};

// ❌ Error (cannot modify readonly property)
//user1.name = "Rahul";

//Error:

//Cannot assign to 'name' because it is a read-only property.

type StringifiedUser = {
    [K in keyof User]: string;
};

const user2: StringifiedUser = {
    id: "1",
    name: "Jaydeep",
    isActive: "true"
};

console.log(user2)

/*  
{
"id": "1",
  "name": "Jaydeep",
  "isActive": "true"
} 
  */

type OptionalAndNullableUser = {
    [K in keyof User]?: User[K] | null;
};
// Usage
const user3: OptionalAndNullableUser = {
    name: null
};

const user4: OptionalAndNullableUser = {}; // also valid

console.log(user4) // {}