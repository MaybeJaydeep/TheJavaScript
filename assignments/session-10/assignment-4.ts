/*

Assignment 4: Intersection Types
Create an Order using intersection ( & )
Create the same model using interfaces and extends
Remove one required property and observe the compiler error
Decide which approach feels clearer and why
Create two small object types and combine them using intersection ( & )
Create the same structure using interfaces and extends
Try removing a required property and observe the compiler error
Identify when intersection is better than union

*/

type OrderBase = {
    orderId: number;
    amount: number;
};

type Auditable = {
    createdAt: Date;
    createdBy: string;
};

type Order = OrderBase & Auditable;

/*

const MyOwnOrderType: Order = {
    orderId: 12345,
    amount: 123,
    createdBy: "jaydeep",
    // compilation error because i removed the required proprty of Auditable i.e. createdAt
}   

*/

//valid object creation using type and (  &  )
const MyOwnOrderType: Order = {
    orderId: 12345,
    amount: 123,
    createdAt: new Date(),
    createdBy: "jaydeep",
    
}   

interface BaseOrder {
    orderId: number;
    amount: number;
}

interface AuditedOrder extends BaseOrder {
    createdAt: Date;
    createdBy: string;
}

//valid object using interface
const MyOwnOrderInterface: AuditedOrder = {   
    orderId : 122334,
    amount: 54321,
    createdAt: new Date(),
    createdBy: "jaydeep"
    
}

/*
const MyOwnOrderInterface: AuditedOrder = {   
    orderId : 122334,
    amount: 54321,
    createdBy: "jaydeep"
    // compile time error as I havent removed one property of AuditedOrder
}

Clearer Approach:
Using interface inheritance (extends) is usually clearer than using intersection types (&) for object models.

Why interface extends feels clearer

interface BaseOrder {
    orderId: number;
    amount: number;
}

interface AuditedOrder extends BaseOrder {
    createdAt: Date;
    createdBy: string;
}


Reasons:

1.Readable hierarchy – clearly shows inheritance.

2.Avoids duplication – BaseOrder isn't combined again.

3.Better for large models – easier to scale.

4.Common in backend/domain models – matches OOP thinking.

Intersection approach:

type Order = OrderBase & Auditable;


This is powerful but:

1.Can become messy with many intersections.

2.Relationships are less explicit.

3.Harder to read in large systems.


* When Intersection is Better than Union

Intersection (&)

Use when object must contain all features.

Example:

User must be Person AND Employee

Union (|)

Use when object can be one of many types.

Example:

User can be Admin OR Customer


Situation	                        Use
Need all properties	            Intersection (&)
Need one of many types	          Union ( | )

*/
