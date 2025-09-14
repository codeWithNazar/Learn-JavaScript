// Step 12: Events Practice
// Use with an HTML file

document.getElementById("clickBtn").addEventListener("click", () => {
  console.log("Button clicked!");
});

document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});

// Practice:
// 1. Create a button that logs a custom message.
// 2. Detect Enter key and log a message.
// 3. Create a form, prevent default submission, and log input value.
