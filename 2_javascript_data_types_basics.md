# Step 2: Data Types in JavaScript

## 1️⃣ What are Data Types?
Data types define **what kind of data** a variable can hold. JavaScript has **primitive** and **non-primitive** types.

- **Primitive types**: string, number, boolean, null, undefined, symbol, bigint
- **Non-primitive (reference) types**: objects, arrays, functions

---

## 2️⃣ Primitive Data Types

### **1. String**
Text data enclosed in quotes (`''`, `""`, or `` `` ``).
```javascript
let name = "WebApp";
console.log(name); // WebApp
```

### **2. Number**
Numeric values (integers and decimals).
```javascript
let age = 25;
let price = 19.99;
console.log(age + price); // 44.99
```

### **3. Boolean**
Represents `true` or `false`.
```javascript
let isAdmin = true;
let isLoggedIn = false;
console.log(isAdmin); // true
```

### **4. Null**
Represents an **empty value**.
```javascript
let data = null;
console.log(data); // null
```

### **5. Undefined**
Represents a variable that **has been declared but not assigned**.
```javascript
let result;
console.log(result); // undefined
```

### **6. Symbol**
Unique identifier.
```javascript
let id = Symbol('id');
console.log(id); // Symbol(id)
```

### **7. BigInt**
Large integers beyond the normal number limit.
```javascript
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);
```

---

## 3️⃣ Non-Primitive Data Types

### **1. Object**
Stores key-value pairs.
```javascript
let person = {
  name: "WebApp",
  age: 25
};
console.log(person.name); // WebApp
```

### **2. Array**
List of values.
```javascript
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1
```

### **3. Function**
Reusable blocks of code.
```javascript
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("WebApp")); // Hello, WebApp
```

---

## 4️⃣ Check Data Types
Use `typeof` to check a variable's type.
```javascript
let name = "WebApp";
let age = 25;
console.log(typeof name); // string
console.log(typeof age); // number
```

---

## 5️⃣ Practice Exercise
1. Create a variable for your **username** (string).
2. Create a variable for your **age** (number).
3. Create a variable to check if you are **a student** (boolean).
4. Create a variable called **details** as an object with your **name and age**.
5. Create an array of **your favorite colors**.

Example:
```javascript
let username = "WebApp";
let age = 25;
let isStudent = true;
let details = { name: username, age: age };
let favoriteColors = ["blue", "green", "red"];

console.log(username, age, isStudent);
console.log(details);
console.log(favoriteColors);
```

