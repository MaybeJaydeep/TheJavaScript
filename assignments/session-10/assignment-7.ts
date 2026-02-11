/*

Assignment 7: Enums
Create an enum for payment states (INITIATED, SUCCESS, FAILED)
Write a function that accepts only this enum
Try passing an invalid value and observe the error
Why enums are better than magic strings?

*/

enum PaymentStatus {
    initiated = "INITIATED",
    success = "SUCCESS",
    failed = "FAILED"
}
/*
Used hard-coded string but not a good practice
function Payment(state:PaymentStatus){
    if(state === "INITIATED" || state === "SUCCESS" || state === "FAILED")
        console.log("Status of payment", state)
}
*/

function Payment(state: PaymentStatus): void {
    if (state === PaymentStatus.failed) {
        console.log("Status of Payment: ", PaymentStatus.failed);
    }
    else if (state === PaymentStatus.success) {
        console.log("Status of Payment: ", PaymentStatus.success);
    }
    else if (state === PaymentStatus.initiated) {
        console.log("Status of Payment: ", PaymentStatus.initiated);
    }
    else console.log("Something went wrong with product status")
}

Payment(PaymentStatus.success);
//  Payment(PaymentStatus.booked);

/*
Magic strings are hard-coded string values used directly in code, like:

if (status === "pending") { ... }

Problems with magic strings

Typos cause bugs

if (status === "pendng") // typo, no compiler error


No auto-completion
Developers must remember exact values.

Hard to refactor
Changing "pending" everywhere is error-prone.

No central definition
Values are scattered across files.

Why enums are better

Enums define a fixed set of allowed values in one place.

enum Status {
  Pending = "pending",
  Approved = "approved",
  Rejected = "rejected"
}

if (status === Status.Pending) { ... }

*/