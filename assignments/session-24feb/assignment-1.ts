/*
Assignment 1
Create a type IsNumber<T> .
Create a type ExtractEmail<T> that extracts email type if present.
*/

interface User {
id: string
name: string
email: string
role: "ADMIN" | "CUSTOMER"
isActive: boolean
}

interface User1 {
id: string
}

type IsNumber<T> = T extends number ? true : false;

type Addition = IsNumber<number>; //true

type Concat = IsNumber<string>;   //false

type ExtractEmail<T> = T extends {email: infer U} ? U : never;

type UserEmail = ExtractEmail<User>;    // string

type UserEmail1 = ExtractEmail<User1>  //  never

