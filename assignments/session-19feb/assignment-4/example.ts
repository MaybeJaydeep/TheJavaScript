/*
Assignment 4
Create a constant adminUser .

Create a type from it using typeof .
Add a new property and observe how the type changes automatically.

*/

const adminUser = {
    id: 1,
    name: "Jaydeep",
    role: "admin",
    isActive: true
};

type AdminUser = typeof adminUser;

const appAdmin: AdminUser = {
    id: 2,
    name: "Rahul",
    role: "admin",
    isActive: false
};

console.log(appAdmin);

//Add a New Property (Observe Auto Update)

const adminUser1 = {
    id: 1,
    name: "Jaydeep",
    role: "admin",
    isActive: true,
    email: "admin@mail.com"   // ✅ new property added
};

type AdminUser1 = typeof adminUser;

console.log(adminUser1);

/* output: 

[LOG]: {
  "id": 2,
  "name": "Rahul",
  "role": "admin",
  "isActive": false
} 
[LOG]: {
  "id": 1,
  "name": "Jaydeep",
  "role": "admin",
  "isActive": true,
  "email": "admin@mail.com"
} 

*/