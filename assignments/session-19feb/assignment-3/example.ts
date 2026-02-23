/*

Assignment 3
Create a function updateField that takes:
object
key
value
Ensure the value type matches the key type.
Try assigning wrong type and observe the error.

*/

// Generic function
function updateField<T, K extends keyof T>(
    obj: T,
    key: K,
    value: T[K]
): T {
    obj[key] = value;
    return obj;
}

const user = {
    id: 1,
    name: "Jaydeep",
    isActive: false
};


updateField(user, "name", "Neil");
updateField(user, "id", 10);
updateField(user, "isActive", true);

/*
Invalid Usage (Observe TypeScript Errors)
Wrong value type
updateField(user, "id", "hello");

Error:

Argument of type 'string' is not assignable to type 'number'
Another wrong example
updateField(user, "isActive", "yes");

Error:

Type 'string' is not assignable to type 'boolean'
Invalid key
updateField(user, "email", "test@mail.com");

Error:

Argument of type '"email"' is not assignable to parameter of type '"id" | "name" | "isActive"'

*/