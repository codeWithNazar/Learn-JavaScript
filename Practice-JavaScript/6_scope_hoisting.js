// Step 6: Scope & Hoisting Practice

// Global Scope
let globalVar = "I am global";

function checkScope() {
  let localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}
checkScope();

// Hoisting
console.log(x); // undefined due to hoisting
var x = 5;

// Practice:
// 1. Create a global variable and access it inside a function.
// 2. Create a block-scoped variable with let inside an if statement.
// 3. Test hoisting with var, let, and const.
