/*
Create a type UserPublicProfile without email and isActive .
Create a Record that maps user IDs (string) to User objects.

*/

type Customer = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

type CustomerPublicProfile = Omit<Customer, "email" | "isActive">;

const publicUser: CustomerPublicProfile = {
    id: 1,
    name: "Jaydeep"
};

/*

const PublicUser: CustomerPublicProfile = {
    id: 1,
    name: "Jaydeep",
    email: "test@mail.com" // Error
};

Error:

Object literal may only specify known properties

*/

type CustomerRecord = Record<string, Customer>;

const users: CustomerRecord = {
    "u1": {
        id: 1,
        name: "Jaydeep",
        email: "jaydeep@mail.com",
        isActive: true
    },
    "u2": {
        id: 2,
        name: "Neil",
        email: "neil@mail.com",
        isActive: false
    }
};


/*
Invalid 

const wrongUsers: UserRecord = {
    "u3": {
        id: 3,
        name: "Amit"
        // missing required fields
    }
};

*/