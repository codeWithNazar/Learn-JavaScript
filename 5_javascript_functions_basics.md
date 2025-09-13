# Step 5: Functions in JavaScript

## 1️⃣ What is a Function?
A **function** is a **reusable block of code** that performs a specific task. Functions help **organize code** and **avoid repetition**.

---

## 2️⃣ Function Declaration
```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("WebApp")); // Hello, WebApp!
```
- Declared using the `function` keyword.
- Can be called **before or after** declaration (hoisting applies).

---

## 3️⃣ Function Expression
```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet("WebApp")); // Hello, WebApp!
```
- Function is **stored in a variable**.
- Cannot be called before it is defined.

---

## 4️⃣ Arrow Functions (ES6+)
```javascript
const greet = (name) => `Hello, ${name}!`;
console.log(greet("WebApp")); // Hello, WebApp!
```
- Shorter syntax.
- `this` behaves differently compared to traditional functions.

---

## 5️⃣ Parameters & Return Values
- **Parameters** are inputs for the function.
- **Return value** is the output.

```javascript
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log(sum); // 8
```

---

## 6️⃣ Function Scope
Variables inside a function are **local** and cannot be accessed outside.
```javascript
function test() {
  let localVar = "I am local";
  console.log(localVar);
}
test();
// console.log(localVar); // ❌ Error: localVar is not defined
```

---

## 7️⃣ Practice Exercise
1. Create a function called `greetUser` that takes a name and prints a greeting.
2. Create a function `sumNumbers` that takes two numbers and returns their sum.
3. Convert a function expression into an arrow function.
4. Create a function `isEven` that checks if a number is even and returns true or false.

Example solution:
```javascript
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}
greetUser("WebApp");

const sumNumbers = (a, b) => a + b;
console.log(sumNumbers(5, 7)); // 12

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(10)); // true
console.log(isEven(7));  // false
```

