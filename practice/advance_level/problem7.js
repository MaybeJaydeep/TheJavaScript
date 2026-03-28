/*
Problem 7: Role-Based Permission Checker
Objective
Implement a generic role-based access control utility.
Input
const roles = {
  admin: ["READ", "WRITE", "DELETE"],
  editor: ["READ", "WRITE"],
  viewer: ["READ"]
};

Requirements
Implement:


canAccess(role, permission)

Return true or false


Handle invalid roles safely


Avoid hard-coded conditions


Expected Outcome
canAccess("admin", "DELETE"); // true
canAccess("viewer", "WRITE"); // false
canAccess("unknown", "READ"); // false

*/

const roles = {
  admin: ["READ", "WRITE", "DELETE"],
  editor: ["READ", "WRITE"],
  viewer: ["READ"]
};

const canAccess = (role, permission) => {
  const permissions = roles[role];
  return permissions ? permissions.includes(permission) : false;
};


console.log(canAccess("admin", "DELETE")); // true
console.log(canAccess("viewer", "WRITE")); // false
console.log(canAccess("unknown", "READ")); // false
