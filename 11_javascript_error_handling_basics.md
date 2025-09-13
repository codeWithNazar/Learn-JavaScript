# Step 11: Error Handling in JavaScript

## 1️⃣ What is Error Handling?
Error handling allows a program to **respond to errors gracefully** instead of crashing. JavaScript provides **try, catch, throw, and finally** to handle errors.

---

## 2️⃣ try...catch Statement
Used to **catch runtime errors** and handle them.
```javascript
try {
  let result = riskyOperation(); // function may throw error
  console.log(result);
} catch (error) {
  console.log("An error occurred:", error.message);
}
```

- `try` block contains code that might throw an error.
- `catch` block handles the error.

---

## 3️⃣ throw Statement
Used to **manually create errors**.
```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log(error.message);
}
```

---

## 4️⃣ finally Statement
Code in `finally` **always executes**, regardless of errors.
```javascript
try {
  console.log("Try block running");
  throw new Error("Some error");
} catch (error) {
  console.log("Catch block:", error.message);
} finally {
  console.log("Finally block always runs");
}
```

Output:
```
Try block running
Catch block: Some error
Finally block always runs
```

---

## 5️⃣ Practice Exercise
1. Create a function `safeDivide(a, b)` that throws an error if `b` is 0.
2. Use `try...catch` to handle the error when calling `safeDivide`.
3. Add a `finally` block that prints "Operation finished".

Example solution:
```javascript
function safeDivide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(safeDivide(10, 2)); // 5
  console.log(safeDivide(10, 0)); // throws error
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Operation finished");
}
```

