/*
Assignment 3: Union Types
Add one more role (e.g. Guest ) to the User union
Write a function that accepts User
Use the role field to safely narrow the type
Observe how TypeScript prevents invalid property access
Create a union type for two different user roles using type
Create another union using two interfaces
Write a function that accepts the union and narrows the type safely
*/

type Admin = {
    role: 'admin';
    permissions: string[];
};

type Customer = {
    role: 'customer';
    purchaseHistory: number[];
};

type Guest = {
    role: 'guest';
    email: string;
}

type UserType = Admin | Customer

type User = Admin | Customer | Guest;

function logUser(user: User) {
    switch (user.role) {
        case "admin": console.log("Admin logged in...");
            break;

        case "customer": console.log("Customer logged in...");
            break;

        case "guest": console.log("Guest logged in...");
            break;

        default: console.log("Invalid User role assigned");
    }
}
const newUser: User = {
    role: 'admin',
    //  purchaseHistory: [11,20,2001]           //cannot access property of other types
    permissions: ["read"]
}
logUser(newUser);

interface AdminInterface{
    role: "admin";
    permissions: string[];
}

interface CustomerInterface{
    role: "customer";
    purchaseHistory: number[]
}

type UserInterface = AdminInterface | CustomerInterface;

function handleUser(user: UserInterface) {
    if (user.role === "admin") {
        console.log("Permissions:", user.permissions);
    } else {
        console.log("Purchase History:", user.purchaseHistory);
    }
}

handleUser({
    role: "admin",
    permissions: ["read", "write"]
});

handleUser({
    role: "customer",
    purchaseHistory: [100, 200]
});