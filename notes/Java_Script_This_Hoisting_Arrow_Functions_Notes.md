# JavaScript `this`, Hoisting & Tricky Interview Questions (Amazon, Dream11)

This document explains **real interview questions** commonly asked at companies like **Amazon** and **Dream11**. Topics include:

* `this` keyword behavior
* `var` vs `let`
* Hoisting & Temporal Dead Zone (TDZ)
* Arrow functions vs normal functions
* IIFE behavior
* Getters & setters

All explanations are **execution-based**, not theoretical.

---

## 🔹 Question 1 (Amazon)

```js
var a = 10;
x();
y();
z();

function x() {
  var a = 20;
  console.log(this.a);
}

function y() {
  console.log(this.a);
}

const z = () => {
  console.log(this.a);
};
```

### ✅ Output

```
10
10
ReferenceError
```

### ❓ Why?

#### 1. `var a = 10`

* Declared in **global scope**
* Automatically attached to global object (`window.a = 10` in browser)

#### 2. Function hoisting (`x()` and `y()`)

* Function declarations are **fully hoisted**
* Can be called before their definition

#### 3. `this` inside normal functions

* `x()` and `y()` are called as **standalone functions**
* In non-strict mode: `this → window`
* `this.a` resolves to `window.a` → `10`

⚠️ `var a = 20` inside `x()` is ignored because:

* `this.a` looks for a **property on the object** (`window`)
* Not a local variable

#### 4. Why `z()` crashes?

* `z` is declared using `const`
* Arrow functions are **not hoisted like functions**
* `z` exists in the **Temporal Dead Zone** until initialized

➡️ Calling `z()` before initialization throws:

```
ReferenceError: Cannot access 'z' before initialization
```

---

## 🔹 Question 2 (Amazon – Follow-up)

```js
let a = 10;
x();
y();
z();

function x() {
  console.log(this.a);
}

function y() {
  console.log(this.a);
}

const z = () => {
  console.log(this.a);
};
```

### ✅ Output

```
undefined
undefined
ReferenceError
```

### ❓ Why?

#### Key Difference: `let` vs `var`

| Feature                   | var   | let    |
| ------------------------- | ----- | ------ |
| Attached to global object | ✅ Yes | ❌ No   |
| Hoisted                   | ✅ Yes | ⚠️ TDZ |

#### Explanation

* `let a = 10` is **NOT attached to `window`**
* `this` still points to `window`
* `window.a` does not exist → `undefined`

The `z()` error remains the same due to TDZ.

---

## 🔹 Question 3 (Dream11)

```js
var doc = "this keyword doc";

const obj = {
  doc: 'JS',

  printName: function () {
    return this.doc;
  },

  printNameArrow: () => {
    return this.doc;
  },

  IIFE: (function () {
    return this.doc;
  })(),

  IIFEArrow: (() => {
    return this.doc;
  })()
};

console.log(obj.printName());
console.log(obj.printNameArrow());
console.log(obj.IIFE);
console.log(obj.IIFEArrow);
```

### ✅ Output

```
JS
this keyword doc
this keyword doc
this keyword doc
```

### ❓ Why?

#### 1. `var doc = "this keyword doc"`

* Creates `window.doc`

#### 2. `printName()` (Normal Method)

* Called as `obj.printName()`
* `this → obj`
* Returns `obj.doc` → **JS**

#### 3. `printNameArrow()` (Arrow Function)

* Arrow functions **do NOT have their own `this`**
* `this` is lexically bound to **global scope**
* Returns `window.doc`

#### 4. `IIFE`

* Executed immediately during object creation
* NOT called as a method
* Standalone function → `this → window`

#### 5. `IIFEArrow`

* Arrow function captures surrounding `this`
* Surrounding scope = global
* Returns `window.doc`

---

## 🔹 Question 4 (Getter & Setter)

```js
const obj = {
  _value: 1,

  get value() {
    return this._value * 2;
  },

  set value(val) {
    this._value = val + 1;
  }
};

obj.value = 5;
console.log(obj.value);
```

### ✅ Output

```
12
```

### ❓ Why?

1. `obj.value = 5`

   * Triggers **setter**
   * `_value = 5 + 1 = 6`

2. `obj.value`

   * Triggers **getter**
   * Returns `6 * 2 = 12`

---

## 🧠 Key Takeaways (Interview Gold)

* `this` depends on **how a function is called**, not where it is written
* Arrow functions **never** bind their own `this`
* `var` attaches to global object, `let` does not
* `const` & `let` live in **Temporal Dead Zone**
* IIFE executes immediately, not as an object method
* Getters/setters behave like properties, not functions

---

## 🔥 One-Liners for Interviews

* "Arrow functions capture `this` lexically"
* "`var` pollutes global scope"
* "Hoisting + TDZ is why ReferenceError happens"
* "Getters and setters are executed, not accessed"

---

