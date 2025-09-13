# Step 1: Variables in JavaScript

## 1️⃣ What is a Variable?
A **variable** is like a container that **stores data**. You can store things like numbers, text, or even objects in a variable and **use or change them later**.

Think of it as a labeled jar:
```javascript
let age = 25; // jar labeled "age" with value 25
```

---

## 2️⃣ Why Do We Need Variables?
- To **store data** temporarily.
- To **reuse values** without rewriting them.
- To make programs **dynamic** and flexible.

Example:
```javascript
let username = "WebApp";
console.log("Hello, " + username + "!"); // Reuses the variable
```

---

## 3️⃣ Declaring Variables

### **1. var**
- Old way to declare variables.
- Function-scoped (can cause bugs in modern code).
- Can be **redeclared** and **updated**.

```javascript
var name = "WebApp";
var name = "Developer"; // allowed
name = "Coder"; // also allowed
console.log(name); // "Coder"
```

### **2. let**
- Modern way to declare variables that **can change**.
- Block-scoped (limited to the `{}` it’s defined in).
- Cannot be redeclared in the same scope.

```javascript
let age = 25;
age = 26; // allowed
// let age = 27; // ❌ Error: already declared in this scope
console.log(age); // 26
```

### **3. const**
- Used for variables that **never change**.
- Block-scoped.
- Must be initialized when declared.

```javascript
const city = "New York";
// city = "Los Angeles"; // ❌ Error: cannot reassign
console.log(city); // "New York"
```

---

## 4️⃣ Scope (Where Variables Exist)

| Type  | Scope                           |
|-------|--------------------------------|
| var   | Function scope                 |
| let   | Block scope (`{}`)             |
| const | Block scope (`{}`)             |

Example:
```javascript
if (true) {
    var a = 10;  // accessible outside the block
    let b = 20;  // NOT accessible outside the block
    const c = 30; // NOT accessible outside the block
}
console.log(a); // 10
// console.log(b); // ❌ Error
// console.log(c); // ❌ Error
```

---

## 5️⃣ Practice Exercise
Create variables for **name, age, and city**:

```javascript
let name = "WebApp";
let age = 25;
const city = "New York";

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
```

**Try changing values** for `name` and `age`, and see what happens if you try to change `city`.

