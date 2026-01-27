let role = "ADMIN"; // change role to USER, MANAGER, or something else

switch (role) {
  case "ADMIN":
    console.log("Full access");
    break;

  case "USER":
    console.log("Limited access");
    break;

  case "MANAGER":
    console.log("Moderate access");
    break;

  default:
    console.log("Invalid role");
}
/*
const roleAccess = {
  ADMIN: "Full access",
  MANAGER: "Moderate access",
  USER: "Limited access",
  SUPPORT: "Ticket handling access",
  GUEST: "Read-only access"
};

let role = "MANAGER";

console.log(roleAccess[role] ?? "Invalid role");
*/