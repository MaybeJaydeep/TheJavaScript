# 🔁 Type Conversion & Type Coercion in JavaScript

JavaScript is a **loosely typed (dynamically typed)** language, meaning variables are not bound to a specific data type and can change types at runtime.

This behavior introduces two important concepts:

- **Type Conversion (Explicit)**
- **Type Coercion (Implicit)**

Understanding these concepts is essential for **writing predictable code**, **debugging**, and **JavaScript interviews**.

---

## 📌 1. Type Conversion (Explicit Conversion)

Type Conversion occurs when **developers manually convert** one data type into another using built-in methods.

### ✅ Common Conversion Methods

| Convert To | Methods |
|----------|---------|
| Number | `Number()`, `parseInt()`, `parseFloat()` |
| String | `String()`, `.toString()` |
| Boolean | `Boolean()` |

---

### 🔢 String → Number

```js
Number("123")        // 123
Number("123abc")    // NaN
parseInt("123abc")  // 123
parseFloat("12.5")  // 12.5

```

⚠️ parseInt() parses until a non-numeric character is encountered.

```js
String(100)       // "100"
(100).toString()  // "100"

```

### 🔘 Any → Boolean

```js
Boolean(1)          // true
Boolean(0)          // false
Boolean("")         // false
Boolean("hello")    // true
Boolean(null)       // false
Boolean(undefined)  // false

```

### 🔍 Truthy & Falsy Values

## ❌ Falsy Values (ONLY these)

```js
false
0
-0
0n
""
null
undefined
NaN
```

## ✅ Everything else is Truthy.

### 📌 2. Type Coercion (Implicit Conversion)

## Type Coercion happens when JavaScript automatically converts data types during operations.

➕ + Operator (String Priority)

```js
"5" + 1      // "51"
1 + "5"      // "15"
"5" + true   // "5true"
```

### 📌 If any operand is a string, JavaScript converts the other operand to a string.

➖ -, *, / Operators (Numeric Coercion)

```js
"5" - 1   // 4
"5" * 2   // 10
"10" / 2  // 5
```


### 📌 These operators force operands to numbers.

## ⚖️ Equality Operators

Loose Equality (==) – Allows Coercion

```js
5 == "5"            // true
true == 1           // true
null == undefined   // true
```

Strict Equality (===) – No Coercion (Recommended)
```js
5 === "5"   // false
true === 1  // false
```

## ✅ Always prefer === in production code.

### 📌 3. Boolean Coercion in Conditions

```js
if ("hello") {
  // Executes (truthy)
}

if (0) {
  // Never executes (falsy)
}
```

## Boolean coercion commonly occurs in:

# if statements

# while loops

# for loops

# logical expressions

### 📌 4. Logical Operators & Coercion

## 🔹 AND (&&)

```js
true && "hello"    // "hello"
false && "hello"   // false
```


## 📌 Returns the first falsy value or the last truthy value.

# 🔹 OR (||)

```js
"" || "default"   // "default"
0 || 10           // 10
```

## 📌 Returns the first truthy value.

# 🔹 Nullish Coalescing (??)
```js
null ?? "fallback"        // "fallback"
undefined ?? "value"     // "value"
0 ?? 100                 // 0
```

## 📌 Only checks for null or undefined.

### 📌 5. Tricky Coercion Examples (Interview Gold 🥇)
```js
[] + []        // ""
[] + {}        // "[object Object]"
{} + []        // 0 (browser console behavior)
"5" - - "2"   // 7
true + true   // 2
null + 1      // 1
undefined + 1 // NaN
```

## ⚠️ These results occur due to JavaScript internal coercion rules.

### 📌 6. Best Practices

✅ Prefer === over ==
✅ Use explicit type conversion
✅ Avoid relying on implicit coercion
✅ Validate inputs carefully
❌ Avoid complex mixed-type expressions

### 📌 7. Comparison Summary
Aspect	Type Conversion	Type Coercion
Who converts	Developer	JavaScript
Control	Full	Automatic
Predictability	High	Risky
Example	Number("5")	"5" - 1

## 🎯 Final Takeaway

Type Conversion is intentional.
Type Coercion is automatic.
Good developers control types instead of relying on assumptions.


---