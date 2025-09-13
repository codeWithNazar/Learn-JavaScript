# Step 6: Scope & Hoisting in JavaScript

## 1️⃣ What is Scope?
**Scope** determines **where a variable can be accessed** in your code.

### Types of Scope
- **Global Scope**: Accessible anywhere in the code.
- **Local/Function Scope**: Accessible only inside the function it is declared.
- **Block Scope**: Accessible only inside a block `{}` (applies to `let` and `const`).

---

### Example: Global Scope
```javascript
let globalVar = "I am global";
function testGlobal() {
  console.log(globalVar); // Accessible
}
testGlobal();
console.log(globalVar); // Accessible
```

### Example: Local/Function Scope
```javascript
function testLocal() {
  let localVar = "I am local";
  console.log(localVar); // Accessible inside function
}
testLocal();
// console.log(localVar); // ❌ Error: not accessible outside
```

### Example: Block Scope
```javascript
if (true) {
  let blockVar = "I am block scoped";
  const blockConst = 42;
  var blockVarVar = "I am function scoped";
  console.log(blockVar, blockConst, blockVarVar);
}
// console.log(blockVar); // ❌ Error
// console.log(blockConst); // ❌ Error
console.log(blockVarVar); // Accessible because var is function scoped
```

---

## 2️⃣ What is Hoisting?
**Hoisting** moves **variable and function declarations to the top of their scope** before code execution.

### Variable Hoisting
- `var` is hoisted and initialized as `undefined`.
- `let` and `const` are hoisted but **not initialized** (Temporal Dead Zone).

```javascript
console.log(a); // undefined
var a = 5;

// console.log(b); // ❌ ReferenceError
let b = 10;
```

### Function Hoisting
- Function declarations are hoisted completely.
```javascript
greet(); // Hello!
function greet() {
  console.log("Hello!");
}
```
- Function expressions are **not hoisted**.
```javascript
// greetExpr(); // ❌ Error
const greetExpr = function() {
  console.log("Hello!");
};
```

---

## 3️⃣ Practice Exercise
1. Declare a global variable and access it inside a function.
2. Declare a local variable inside a function and try accessing it outside.
3. Create a block scope with `let` and `const` and test access outside the block.
4. Demonstrate hoisting with `var` and `let`.
5. Declare a function using a declaration and a function expression, and test hoisting behavior.

Example solution:
```javascript
let globalVar = "I am global";
function testScope() {
  let localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}
testScope();
// console.log(localVar); // ❌ Error

if (true) {
  let blockVar = "I am block";
  const blockConst = 42;
  console.log(blockVar, blockConst);
}
// console.log(blockVar); // ❌ Error

console.log(hoistedVar); // undefined
var hoistedVar = 5;
// console.log(notHoisted); // ❌ ReferenceError
let notHoisted = 10;

hoistedFunction(); // Works
function hoistedFunction() { console.log("Hoisted!"); }
// notHoistedFunction(); // ❌ Error
const notHoistedFunction = function() { console.log("Not hoisted!"); };
```

