// Step 16: Best Practices Practice

'use strict';

const PI = 3.14159;
function calculateArea(radius) {
  if (radius <= 0) throw new Error("Radius must be positive");
  return PI * radius * radius;
}

try {
  let area = calculateArea(5);
  console.log(`Area: ${area}`);
} catch (error) {
  console.log(error.message);
}

// Practice:
// 1. Refactor duplicated code into a function.
// 2. Use template literals instead of concatenation.
// 3. Handle errors gracefully with try...catch.
