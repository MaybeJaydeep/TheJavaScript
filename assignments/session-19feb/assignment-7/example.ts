/*

Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.
Create a utility NonNullableFields<T> that removes null and undefined from all properties.
Apply both to User and test different scenarios.

*/

type Consumer = {
    id: number;
    name: string | null;
    email?: string | null;
    isActive: boolean | undefined;
};

type ReadonlyByKeys<T, K extends keyof T> =
    Omit<T, K> & {
        readonly [P in K]: T[P];
    };

type UserReadonlyId = ReadonlyByKeys<Consumer, "id" | "email">;

/*

const user1: UserReadonlyId = {
    id: 1,
    name: "Jaydeep",
    email: "test@mail.com",
    isActive: true
};

//  Error Cannot assign to 'id' because it is a read-only property.
user1.id = 10;

*/

type NonNullableFields<T> = {
    [K in keyof T]: NonNullable<T[K]>;
};

type CleanConsumer = NonNullableFields<Consumer>;


const Consumer2: CleanConsumer = {
    id: 1,
    name: "Jaydeep",
    email: "jaydeep@mail.com",
    isActive: true
};

/*

Invalid :
const badConsumer: CleanConsumer = {
    id: 1,
    name: null, // Error
    email: "a@mail.com",
    isActive: true
};

Error:

Type 'null' is not assignable to type 'string'

*/

type SecureConsumer =
    ReadonlyByKeys<
        NonNullableFields<Consumer>,
        "id"
    >;

const Consumer3: SecureConsumer = {
    id: 1,
    name: "Jaydeep",
    email: "test@mail.com",
    isActive: true
};

/*
//  readonly
Consumer3.id = 5;

//  null removed
Consumer3.name = null;

*/