# Step 16: JavaScript Best Practices & Tips

## 1️⃣ Use `let` and `const` Instead of `var`
- `let` → for variables that may change.
- `const` → for variables that should not change.
- Avoid `var` due to function-scoping and hoisting issues.

```javascript
const PI = 3.14159;
let radius = 5;
let area = PI * radius * radius;
```

---

## 2️⃣ Use Strict Mode
Enables **better error checking**.
```javascript
'use strict';
let x = 3.14; // Error if undeclared
```

---

## 3️⃣ Keep Functions Small and Focused
- Each function should **do one thing only**.
- Improves readability and reusability.

```javascript
function calculateArea(radius) {
  return Math.PI * radius * radius;
}
```

---

## 4️⃣ Avoid Global Variables
- Use local scope to **prevent conflicts**.
- Encapsulate code in functions or modules.

---

## 5️⃣ Use Descriptive Names
- Variable, function, and object names should **reflect their purpose**.
```javascript
let userAge = 25;
function calculateArea(radius) {}
```

---

## 6️⃣ Comment Your Code
- Use comments to **explain complex logic**.
- Helps future you and other developers.

```javascript
// Calculate area of a circle
function calculateArea(radius) {
  return Math.PI * radius * radius;
}
```

---

## 7️⃣ Use Template Literals
- Improves readability compared to string concatenation.
```javascript
let name = "WebApp";
console.log(`Hello, ${name}! Welcome to JS.`);
```

---

## 8️⃣ Handle Errors Gracefully
- Use `try...catch` for error-prone code.
```javascript
try {
  riskyOperation();
} catch(error) {
  console.log("An error occurred:", error.message);
}
```

---

## 9️⃣ Keep Code DRY (Don't Repeat Yourself)
- Avoid duplicating code.
- Use functions, loops, and reusable modules.

---

## 🔟 Practice Exercise
1. Refactor code with repeated logic into functions.
2. Replace string concatenation with template literals.
3. Add `try...catch` for error-prone operations.
4. Declare variables using `let` and `const` appropriately.
5. Add meaningful comments and descriptive variable names.

Example solution:
```javascript
'use strict';

const PI = 3.14159;

function calculateArea(radius) {
  if(radius <= 0) throw new Error("Radius must be positive");
  return PI * radius * radius;
}

try {
  let area = calculateArea(5);
  console.log(`Area of circle: ${area}`);
} catch(error) {
  console.log(error.message);
}
```

