/*
Assignment 2
Create a function activateUser that accepts only objects having isActive: boolean .
Create another function that requires both id and email .
Try passing invalid objects and observe TypeScript errors.

*/
// Type constraint
function activateUser<T extends { isActive: boolean }>(user: T): T {
    user.isActive = true;
    return user;
}

activateUser({ name: "Jaydeep", isActive: false });

activateUser({
    id: 1,
    email: "test@mail.com",
    isActive: false
});

// Error: Property 'isActive' is missing
// activateUser({ name: "Rahul" });

// Argument of type '{ name: string; }' is not assignable...
// Property 'isActive' is missing.

// Required structure
function processUser<T extends { id: number; email: string }>(user: T): T {
    console.log("User ", user.id ,"-", user.email);
    return user;
}

processUser({
    id: 101,
    email: "jaydeep@mail.com",
    name: "Jaydeep"
});

/* Missing email
processUser({
    id: 1
});
Error: Property 'email' is missing
// Wrong type
processUser({
    id: "1",
    email: "test@mail.com"
});
Error: Type 'string' is not assignable to type 'number'

*/