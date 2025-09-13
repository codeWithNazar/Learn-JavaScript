# Step 14: ES6+ Features in JavaScript

## 1️⃣ What is ES6?
ES6 (ECMAScript 2015) introduced **modern features** in JavaScript that make coding **cleaner, shorter, and more powerful**. These include `let`, `const`, arrow functions, template literals, destructuring, and more.

---

## 2️⃣ let & const
- `let` → block-scoped variable, can be updated.
- `const` → block-scoped constant, cannot be updated.
```javascript
let age = 25;
age = 26;
const name = "WebApp";
// name = "NewName"; // ❌ Error
```

---

## 3️⃣ Arrow Functions
- Shorter syntax for functions.
- `this` behaves differently.
```javascript
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
```

---

## 4️⃣ Template Literals
- Use backticks ```` `` for **multi-line strings** and **interpolation**.
```javascript
let name = "WebApp";
let message = `Hello, ${name}!
Welcome to JavaScript.`;
console.log(message);
```

---

## 5️⃣ Destructuring
- Extract values from arrays or objects.
```javascript
let person = { name: "John", age: 25 };
let { name, age } = person;
console.log(name, age); // John 25

let numbers = [1, 2, 3];
let [a, b, c] = numbers;
console.log(a, b, c); // 1 2 3
```

---

## 6️⃣ Default Parameters
- Functions can have default values.
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
```

---

## 7️⃣ Spread & Rest Operators
### Spread → Expand array/object
```javascript
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2); // [1,2,3,4]
```
### Rest → Collect remaining values
```javascript
function sum(...numbers) {
  return numbers.reduce((a,b) => a+b, 0);
}
console.log(sum(1,2,3,4)); // 10
```

---

## 8️⃣ Modules (Import/Export)
- ES6 allows modular code.
```javascript
// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from './math.js';
console.log(add(5,3)); // 8
```

---

## 9️⃣ Practice Exercise
1. Use `let` and `const` to declare variables.
2. Convert a regular function to an arrow function.
3. Use template literals to create a multi-line string.
4. Use destructuring to extract values from an object and an array.
5. Use spread operator to merge two arrays.
6. Use rest operator in a function to sum multiple numbers.

Example solution:
```javascript
let age = 25;
const name = "WebApp";

const multiply = (a, b) => a * b;
console.log(multiply(5,3)); // 15

let greeting = `Hello, ${name}!
You are ${age} years old.`;
console.log(greeting);

let person = { name: "John", age: 25 };
let { name: personName, age: personAge } = person;
console.log(personName, personAge);

let arr1 = [1,2], arr2 = [3,4];
let merged = [...arr1, ...arr2];
console.log(merged);

function sumAll(...nums) {
  return nums.reduce((a,b) => a+b,0);
}
console.log(sumAll(1,2,3,4)); // 10
```

