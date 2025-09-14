// Step 11: Error Handling Practice

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Operation finished");
}

// Practice:
// 1. Write a function that throws an error for negative numbers.
// 2. Use try...catch to handle it.
