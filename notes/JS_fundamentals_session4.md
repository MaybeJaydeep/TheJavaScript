# JavaScript Fundamentals – Session 4

## 1. Data Types: The Foundation

JavaScript data types are categorized based on **how they are stored and copied in memory**.

---

## 1.1 Primitive Data Types

Primitive types store **a single value**.  
When copied, the **actual value** is duplicated.

### List of Primitive Types
- `String` → `"hello"`
- `Number` → `100`
- `BigInt`
- `Boolean` → `true / false`
- `null`
- `undefined`
- `Symbol`

### Primitive Copy Example

```js
let a = 50;
let b = a;

b = 100;

console.log(a); // 50
console.log(b); // 100
✅ Key Point: Changing b does not affect a.

```

## 1.2 Non-Primitive (Reference) Data Types

Non-primitive types store a reference (memory address) instead of the value itself.

## List of Non-Primitive Types

* Objects

* Arrays

* Functions

* Date, Map, Set, etc.

Reference Copy Example

```js
Copy code
let user = { name: "A" };
let u2 = user;

u2.name = "B";

console.log(user.name); // "B"

```

❗ Both variables point to the same object in memory

### 2. Stack vs Heap Memory
Understanding memory is essential to understanding copying.

## 2.1 Stack Memory

* Stores primitive values

* Stores references to heap objects

* Fast & fixed size

* Uses LIFO (Last In, First Out)

```js
a = 10
b = 10

```

## 2.2 Heap Memory
* Stores actual objects & arrays

* Large, flexible memory area

```text
STACK                HEAP
user ──▶ 0x100 ───▶ { name: "A" }

```

# 3. Shallow Copy vs Deep Copy
## 3.1 Shallow Copy
### A shallow copy:

* Creates a new outer object

* Copies references for nested objects

Shallow Copy Example
```js
Copy code
const user = {
  name: "Kaushal",
  age: 25,
  address: {
    city: "Mumbai"
  }
};

const copy = { ...user };

copy.address.city = "Pune";

console.log(user.address.city); // "Pune"
```
⚠️ Nested objects are shared

## 3.2 Deep Copy
### A deep copy:

* Recursively copies all nested objects

* No shared references

* Completely independent

# 4. Practical Shallow Copy Techniques
## 4.1 Object.assign()
```js
let student = { id: 101, grade: 'A' };

let newStudent = Object.assign({}, student);

newStudent.grade = 'B';

console.log(student.grade); // A
```

## 4.2 Spread Operator (...)

```js
Copy code
let arr = [1, 2, 3];
let copy = [...arr];

copy.push(4);
Object Copy
js
Copy code
let config = { timeout: 1000 };

let newConfig = { ...config, timeout: 500 };
```

## 4.3 Destructuring
```js
const product = { name: "Laptop", price: 1200 };

const { name, price } = product;
✔ Extracts values into new variables
```

## 4.4 Rest Operator
```js
const [a, ...rest] = [10, 20, 30];
js
Copy code
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
```
## 4.5 Template Literals
```js
let name = "Alex";
let msg = `Welcome, ${name}!`;
```
✔ Used only for strings

# 5. Deep Copy Solutions
## 5.1 JSON Serialization (Limitations)
```js
let settings = { data: [10, 20] };

let deepCopy = JSON.parse(JSON.stringify(settings));
```
## ❌ Loses:

* Functions

* Dates

* Symbols

* undefined

## 5.2 structuredClone() (Recommended)
```js
let data = {
  date: new Date(),
  map: new Map()
};

let clone = structuredClone(data);
```
## ✔ Handles:

* Circular references

* Maps / Sets

* Dates

# 6. JavaScript OOP Model
JavaScript uses Prototype-Based Inheritance, not class-based.

* Classical OOP	JavaScript
* Classes	Objects
* Blueprints	Prototype chains
* Static typing	Dynamic typing

# 7. Prototypes
Every object has a hidden [[Prototype]].

```js
Copy code
const user = { name: "Kaushal" };

Object.getPrototypeOf(user);
```

# 8. Prototype Chain
Property lookup order:

* Object itself

* Prototype

* Prototype’s prototype

* Object.prototype

* null

Example
```js
const animal = {
  breathe() {
    console.log("Breathing");
  }
};

const dog = {};
Object.setPrototypeOf(dog, animal);

dog.breathe();
```

# 9. Constructor Functions
## 9.1 Constructor Pattern
```js
function User(name, age) {
  this.name = name;
  this.age = age;
}

const user = new User("Kaushal", 25);
```
## 9.2 What new Does Internally

* Creates empty object

* Links prototype

* Executes constructor

* Returns object

## 9.3 Prototype Methods
```js

User.prototype.greet = function () {
  console.log(this.name);
};
```
### ✔ Shared across all instances

## 9.4 Problem Without new
```js

function User(name) {
  this.name = name;
}

User("Rahul"); // BUG: pollutes global scope
```

Safe Pattern
```js
function SafeUser(name) {
  if (!(this instanceof SafeUser)) {
    return new SafeUser(name);
  }
  this.name = name;
}
```
# 10. ES6 Classes
Classes are syntax sugar over prototypes.

## 10.1 Class Example
```js
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi ${this.name}`);
  }

  static species = "Homo sapiens";
}
```
## 10.2 Class vs Constructor (Under the Hood)
```js
class User {}
typeof User; // "function"
```
### ✔ Classes compile to constructor + prototype methods

# Final Takeaways
✔ Primitives copy by value
✔ Objects copy by reference
✔ Spread & Object.assign = shallow copy
✔ structuredClone() = true deep copy
✔ JavaScript OOP is prototype-based, not class-based