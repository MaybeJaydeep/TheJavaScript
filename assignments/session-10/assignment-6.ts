/*

Assignment 6: Interfaces
1.Create Admin and Customer interfaces using a common base
2.Extend the base interface to add role-specific properties
3.Write a function that accepts BaseUser
4.Pass both Admin and Customer objects to the function
5.Design an interface for an API response object
6.Create a function that accepts this interface as a parameter
7.Extend the interface and reuse it
8.Create an interface for a Product
9.Create a variable that follows this interface
10.Why are interfaces preferred in large projects?

*/

interface BaseUser {
    id?: number;
    email: string;
}

interface Customer1 extends BaseUser {
    role: 'customer';
    purchaseHistory: number[];
}
interface Admin1 extends BaseUser {
    role: 'admin';
    permissions: string[];
}

function acceptUser(User: BaseUser): void {
    console.log("User id: ", User.id)
}

const obj = {
    id:50,
    name:"abc",
    email:"abc@gmail.com"
}

acceptUser(obj);

interface APIHeader {
    sessionID:ID;
    token: string,
    URL : string,
    
}

interface APIResponse extends APIHeader{
    body:{},
}


const APIHeaderObj:APIHeader = {
    sessionID: "",
    token: "",
    URL: "",
}

const APIResponseObj:APIResponse = {
    sessionID: "",
    token: "",
    URL: "",
    body:{}
}

function receiveAPI(api : APIResponse):void{
    console.log("Session id: ",api.sessionID);
    console.log("token: ",api.token);
    console.log("URL: ",api.URL);
    console.log("Body: ",api.body);
}

receiveAPI(APIResponseObj);

interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}


let product1: Product = {
    id: 101,
    name: "Wireless Mouse",
    price: 799,
    inStock: true
};


/* 
10. Why are interfaces preferred in large projects?

Interfaces are preferred in large projects because:

1. They enforce consistent structure across the application.
2. Multiple developers can follow the same data contract.
3. Interfaces support extension and merging, making them scalable.
4. Improves maintainability and readability.
5. Helps catch type errors early during development.
6. Makes large codebases easier to manage and refactor.

In short, interfaces act as clear contracts for objects.
*/